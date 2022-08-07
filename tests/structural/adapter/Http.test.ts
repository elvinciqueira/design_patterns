import axios from 'axios';

test('Deve testar a API', async () => {
  const response = await axios.get('http://localhost:3000/books');
  const books = response.data;
  const [book1, book2, book3] = books;

  expect(books).toHaveLength(3);
  expect(book1.title).toBe('Refactoring');
  expect(book2.title).toBe('The Philosophy of Code');
  expect(book3.title).toBe('Clean Code');
});
