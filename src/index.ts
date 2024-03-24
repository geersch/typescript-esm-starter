import { app } from './server.js';

async function bootstrap() {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
  });
}

bootstrap();
