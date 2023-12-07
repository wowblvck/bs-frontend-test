import { NextRequest, NextResponse } from 'next/server';
import { faker } from '@faker-js/faker';
import prisma from '@/prisma/client';
import { Prisma } from '@prisma/client';

const createRandomRequest = (): Prisma.RequestCreateInput => {
  return {
    title: faker.lorem.word(),
    logo: faker.image.urlLoremFlickr({
      category: 'logo',
      width: 64,
      height: 64,
    }),
    group: faker.lorem.word(),
    status: faker.helpers.arrayElement(['on_check', 'approved', 'rejected']),
    price: faker.number.float({ min: 100, max: 1000 }),
    stats: {
      create: {
        users: faker.number.int({ min: 3, max: 500 }),
        views: faker.number.int({ min: 3, max: 500 }),
        male: faker.number.int({ min: 3, max: 500 }),
        female: faker.number.int({ min: 3, max: 500 }),
      },
    },
    tags: {
      ...faker.helpers.arrayElements(
        Array.from({ length: 10 }, () =>
          faker.helpers.arrayElements(
            Array.from({ length: 10 }, faker.lorem.word),
            {
              min: 1,
              max: 3,
            }
          )
        ),
        {
          min: 1,
          max: 5,
        }
      ),
    },
  };
};

export async function POST(request: NextRequest) {
  const rewrite = request.nextUrl.searchParams.get('rewrite');
  const size = request.nextUrl.searchParams.get('size');
  const remove = request.nextUrl.searchParams.get('remove');

  try {
    const dropDatabase = async () => {
      await prisma.$queryRaw`DELETE FROM requests`;
      await prisma.$queryRaw`DELETE FROM stats`;
    };

    if (remove === 'y') {
      await dropDatabase();
      return NextResponse.json('Database successfully removed!');
    }

    const result: [{ count: number }] =
      await prisma.$queryRaw`SELECT Count(id) FROM requests`;

    if (
      Object.hasOwn(result[0], 'count') &&
      result[0].count > 0 &&
      rewrite !== 'y'
    ) {
      return NextResponse.json(
        {
          success: false,
          code: 409,
          message:
            'The data file already exists. Use the "rewrite=y" parameter if' +
            ' you want to rewrite',
        },
        {
          status: 409,
        }
      );
    }

    if (rewrite === 'y') await dropDatabase();

    const generatedData = Array.from(
      { length: size ? Number(size) : 100 },
      createRandomRequest
    );

    await Promise.all(
      generatedData.map((data) =>
        prisma.request.create({
          data: data,
        })
      )
    );

    return NextResponse.json(generatedData);
  } catch {
    return NextResponse.json(
      {
        success: false,
        code: 500,
        message: 'An error occurred while generating data!',
      },
      {
        status: 500,
      }
    );
  }
}
