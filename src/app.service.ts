import { Injectable } from '@nestjs/common';
import { log } from 'console';

@Injectable()
export class AppService {
  getHello(): string {
    log('ansxkajsnxkasnx');
    return 'Hellooooo World!';
  }
}
