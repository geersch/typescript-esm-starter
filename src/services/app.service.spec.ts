import { AppService } from './app.service.js';

describe('AppService', () => {
  let service: AppService;

  beforeAll(() => {
    service = new AppService();
  });

  describe('greet', () => {
    it('should return "Hello World!', () => {
      const greeting = service.getHello();

      expect(greeting).toEqual('Hello World!');
    });
  });
});
