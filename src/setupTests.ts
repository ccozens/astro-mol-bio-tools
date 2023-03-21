import { setupServer } from 'msw/node';
import { restHandler } from './mocks/handlers';

export const server = setupServer(...restHandler);


