import { NextResponse } from "next/server";
import demoData from "../../data/demoData.json";

export const GET = async () => {
  const usersData = demoData;

  if (!usersData) {
    return NextResponse.json({ message: "Users not found" }, { status: 404 });
  }

  return NextResponse.json(
    { message: "successful", data: demoData },
    { status: 200 }
  );
};
