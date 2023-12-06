import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const offset = Number(params.get('offset'));
  const limit = Number(params.get('limit'));

  try {
    const allRequests = await prisma.request.findMany({
      include: {
        stats: true,
      },
      orderBy: {
        group: 'asc',
      },
    });
    if (!(offset && limit)) return NextResponse.json(allRequests);

    const startIndex = (offset - 1) * limit;
    const endIndex = offset * limit;

    const paginatedData = allRequests.slice(startIndex, endIndex);

    return NextResponse.json(paginatedData, {
      headers: {
        'X-Total-Count': allRequests.length.toString(),
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
