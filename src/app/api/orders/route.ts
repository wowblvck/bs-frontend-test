import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import { RequestData } from './types';
import { filePath } from './config';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const offset = Number(params.get('offset'));
  const limit = Number(params.get('limit'));

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

    if (!(offset && limit)) return NextResponse.json(requestsData);

    const startIndex = (offset - 1) * limit;
    const endIndex = offset * limit;

    const paginatedData = requestsData.slice(startIndex, endIndex);

    return NextResponse.json(paginatedData, {
      headers: {
        'X-Total-Count': requestsData.length.toString(),
      },
    });
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
