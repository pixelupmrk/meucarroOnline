import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const carros = await prisma.carro.findMany();
    return NextResponse.json(carros);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao conectar" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const carro = await prisma.carro.create({ data });
    return NextResponse.json(carro);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao criar carro" }, { status: 500 });
  }
}
