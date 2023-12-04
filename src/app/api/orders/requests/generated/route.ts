import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import { RequestData } from '@/app/api/orders/types';
import { filePath } from '@/app/api/orders/config';
import { faker } from '@faker-js/faker';

const createRandomRequest = (): RequestData => {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.word(),
    logo: faker.image.urlLoremFlickr({
      category: 'logo',
      width: 64,
      height: 64,
    }),
    group: faker.lorem.word(),
    status: faker.helpers.arrayElement(['on_check', 'approved', 'rejected']),
    price: faker.number.int({ min: 100, max: 1000 }),
    stats: {
      users: faker.number.int({ min: 3, max: 500 }),
      views: faker.number.int({ min: 3, max: 500 }),
      male: faker.number.int({ min: 3, max: 500 }),
      female: faker.number.int({ min: 3, max: 500 }),
    },
    tags: faker.helpers.arrayElements(
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
  };
};

export async function POST(request: NextRequest) {
  const rewrite = request.nextUrl.searchParams.get('rewrite');
  const size = request.nextUrl.searchParams.get('size');

  try {
    const file = await fs
      .access(filePath)
      .then(() => true)
      .catch(() => false);

    if (file && rewrite !== 'y')
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

    const generatedData = Array.from(
      { length: size ? Number(size) : 100 },
      createRandomRequest
    );

    await fs.writeFile(filePath, JSON.stringify(generatedData, null, 2), {
      encoding: 'utf-8',
    });

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
