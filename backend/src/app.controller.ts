import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // TODO: remove api prefix in nginx config
  @Get('/api/hello-world')
  getHello(): string {
    return this.appService.getHello();
  }
}
