import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';

type AcceptParams = {
  params: {
    id: string;
  };
};

export async function PUT(request: NextRequest, { params }: AcceptParams) {
  const id = params.id;

  try {
    const requestData = await prisma.request.findFirst({
      where: {
        id,
      },
    });

    if (!requestData)
      return NextResponse.json(
        {
          success: false,
          code: 404,
          message: `Data with the specified ID '${id}' was not found!`,
        },
        {
          status: 404,
        }
      );

    if (requestData.status === 'approved')
      return NextResponse.json(
        {
          success: false,
          code: 409,
          message: `Status of the application with ID '${id}' has already been approved!`,
        },
        {
          status: 409,
        }
      );

    const updateRequest = await prisma.request.update({
      where: {
        id,
      },
      data: {
        status: 'approved',
      },
      include: {
        stats: true,
      },
    });
    return NextResponse.json(updateRequest);
  } catch {
    return NextResponse.json(
      {
        success: false,
        code: 500,
        message: 'An error occurred while receiving data!',
      },
      {
        status: 500,
      }
    );
  }
}
