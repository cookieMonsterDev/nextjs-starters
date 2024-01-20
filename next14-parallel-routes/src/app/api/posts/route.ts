import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id") || "0";

    if (+id % 2 === 0) {
      throw new NextResponse(JSON.stringify({ message: "test error" }), {
        status: 400,
      });
    }

    return NextResponse.json(
      { searchParams: searchParams.toString() },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof NextResponse) {
      return error;
    } else {
      return new NextResponse("Internal Server Error", { status: 500 });
    }
  }
};
