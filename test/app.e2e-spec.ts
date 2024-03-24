import request from 'supertest';
import { app } from '../src/server.js';

describe('Greetings (e2e)', () => {
  it('/ (GET)', async () => {
    await request(app).get('/api/greetings').expect(200).expect({ greeting: 'Hello World!' });
  });
});
