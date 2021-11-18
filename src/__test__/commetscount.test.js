/**
 * @jest-environment jsdom
 */
import countComments from '../countComments.js';
import sendComments from '../sendCommments.js';

jest.setTimeout(10000);

describe('Comment counter', () => {
  test('Count number of comments', async () => {
    const initialComments = await countComments(2561704);
    await sendComments('2561704', 'Blessed', 'testing with Jest');
    const afterComment = await countComments(2561704);
    expect(afterComment).toBeGreaterThan(initialComments);
  });

  test('Count comments', async () => {
    const afterComment = await countComments(2561704);
    expect(typeof afterComment).toEqual('number');
  });
});