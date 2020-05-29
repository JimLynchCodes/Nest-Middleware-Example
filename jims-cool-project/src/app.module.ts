import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoolMiddleware } from './cool.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {

  configure(userContext: MiddlewareConsumer) {
    userContext.apply(CoolMiddleware)
      .forRoutes({ path: '/', method: RequestMethod.GET })
  }

}
