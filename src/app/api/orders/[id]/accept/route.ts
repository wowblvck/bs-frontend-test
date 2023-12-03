import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import { RequestData } from '@/app/api/orders/types';
import { filePath } from '@/app/api/orders/config';

type AcceptParams = {
  params: {
    id: string;
  };
};

export async function PUT(request: NextRequest, { params }: AcceptParams) {
  const id = params.id;

  try {
    const existFile = await fs
      .access(filePath)
      .then(() => true)
      .catch(() => false);

    if (!existFile)
      return NextResponse.json(
        {
          success: false,
          code: 404,
          message: 'The database file does not exist!',
        },
        {
          status: 404,
        }
      );

    const file = await fs.readFile(filePath, 'utf8');
    const requestsData: RequestData[] = JSON.parse(file);

    const data = requestsData.find((request) => request.id === id);

    if (!data)
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

    if (data.status === 'approved')
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

    data.status = 'approved';

    await fs.writeFile(filePath, JSON.stringify(requestsData, null, 2), 'utf8');

    return NextResponse.json(data);
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
