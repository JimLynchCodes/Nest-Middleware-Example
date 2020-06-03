import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenStorageService } from './token-storage/token-storage.service';

@Injectable()
export class CoolInterceptor implements NestInterceptor {

  constructor(tokenStorageService: TokenStorageService) {

  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    return next.handle().pipe(
      map((data) => {
        const response = context.switchToHttp().getRequest();
        response.header('authorization', 'foobar');
        return data;
      }),
    );
  }
}

