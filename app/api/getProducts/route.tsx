import { NextResponse } from "next/server";

export interface product {
  name: string;
  price: number;
  currency: string;
  banner: string;
}

export async function GET() {
  const dummyData: product[] = [
    { name: "JavaScript Basics", price: 29.99, currency: "$", banner: "/js.png" },
    { name: "Advanced Python", price: 39.99, currency: "€", banner: "/py.png" },
    { name: "React for Beginners", price: 34.99, currency: "$", banner: "/react.jpg" },
  ];

  await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
  return NextResponse.json(dummyData);
}
