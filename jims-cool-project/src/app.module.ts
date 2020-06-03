import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoolMiddleware } from './cool.middleware';
import { CoolInterceptor } from './cool.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TokenStorageService } from './token-storage/token-storage.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CoolInterceptor,
    },
    TokenStorageService,
  ]
})
export class AppModule implements NestModule {

  configure(userContext: MiddlewareConsumer) {
    userContext.apply(CoolMiddleware)
      .forRoutes({ path: '/', method: RequestMethod.GET })
  }

}
