import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeController } from './home/home.controller';
import { SwaggerController } from './docs/swagger.controller';
import { WorkoutsController } from './workouts/workouts.controller';

@Module({
  imports: [],
  controllers: [AppController, HomeController, SwaggerController, WorkoutsController],
  providers: [AppService],
})
export class AppModule {}
