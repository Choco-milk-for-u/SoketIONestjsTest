import { HttpException, HttpStatus } from "@nestjs/common";
import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module";

console.log('Starting the server');
(async () => {
  console.log('please wait...');
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule, {cors: true});

    app.enableCors({ origin: 'http://localhost:3000', credentials: true });
    app.listen(PORT, () => {
      console.log('server is started');
    });
  } catch (error) {
    new HttpException(error, HttpStatus.BAD_GATEWAY);
  }
})()