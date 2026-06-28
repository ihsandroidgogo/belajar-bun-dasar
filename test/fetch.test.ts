import {describe,it,expect} from 'bun:test'

describe('fetch', async () => {
  it('should fetch a URL and return a response', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toContain('application/json');
  });
});