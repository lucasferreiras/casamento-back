import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  create(@Body() createProductDto: { name: string; description?: string }) {
    return this.productsService.createProduct(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.getAllProducts();
  }

  @Patch(':id')
  updateAvailability(@Param('id') id: string, @Body() updateDto: { isAvailable: boolean }) {
    return this.productsService.updateProductAvailability(+id, updateDto.isAvailable);
  }
}
