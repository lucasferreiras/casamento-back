import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ProductsService {
  async createProduct(data: { name: string; description?: string; img?: string }) {
    return prisma.product.create({ data });
  }

  async getAllProducts() {
    return prisma.product.findMany();
  }

  async updateProduct(id: number, data: { isAvailable?: boolean; description?: string }) {
    return prisma.product.update({
      where: { id },
      data,
    });
  }
}
