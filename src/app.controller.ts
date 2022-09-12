import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/getPosition')
  getPositionList(): Promise<Array<string>>{
    const result = this.appService.getPositionList();
    return result
  }

  @Get('/getCourseList')
  getCourseList(): Promise<Array<string>> {
    const result = this.appService.getCourseList()
    return result
  }
}
