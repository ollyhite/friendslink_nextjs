// pages/api/user.ts
import { NextResponse, NextRequest } from "next/server";
import demoData from "../../data/demoData.json";
import { UserData } from "../../types/userType";

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("id");

  if (!userId) {
    return NextResponse.json(
      { message: "User ID not provided" },
      { status: 400 }
    );
  }

  const userData = (demoData as UserData[]).find(
    (user) => user.id === Number(userId)
  );

  if (!userData) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json(
    { message: "successful", data: userData },
    { status: 200 }
  );
};
