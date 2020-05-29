import { CoolMiddleware } from './cool.middleware';

describe('CoolMiddleware', () => {
  it('should be defined', () => {
    expect(new CoolMiddleware()).toBeDefined();
  });
});
