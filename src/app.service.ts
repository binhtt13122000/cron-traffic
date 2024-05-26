import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  @Cron(CronExpression.EVERY_10_MINUTES)
  handleCron() {
    console.log('Called every 30 seconds');
    this.httpService.get("")
  }
}
