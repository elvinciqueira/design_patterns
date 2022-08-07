import ExpressAdapter from './ExpressAdapter';
import HapiAdapter from './HapiAdapter';

const books = [
  { title: 'Refactoring' },
  { title: 'The Philosophy of Code' },
  { title: 'Clean Code' },
];

// const server = new HapiAdapter();
const server = new ExpressAdapter();

server.route('get', '/books', () => books);
server.listen();
