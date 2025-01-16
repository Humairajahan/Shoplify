import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Shoplify Backend API')
  .setDescription(
    'API documentation for the Shoplify e-commerce platform, covering products, orders, customers, and more.',
  )
  .setVersion('1.0')
  .build();
