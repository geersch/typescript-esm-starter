export class AppService {
  getHello(): string {
    return `Hello World!`;
  }
}

const appService = new AppService();

export { appService };
