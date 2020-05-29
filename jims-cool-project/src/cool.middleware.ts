import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CoolMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {

    // const headers = req.headers.Authorization
    const headers = "something"

    if (!this.isValidToken(headers))
      return res.status(500).send("Something broke!")

    next();
  }

  isValidToken(token: string): boolean {

    const rand = Math.random()
    console.log('rand is: ', rand);
    
    if (rand < 0.5)
      return true
     
    return false

  }

}
