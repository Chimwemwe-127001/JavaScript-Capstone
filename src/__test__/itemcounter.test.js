/**
 * @jest-environment jsdom
 */
import itemCounter from '../itemCount.js';

test('Items counts is', async () => {
  const total = await itemCounter();
  expect(total).toBe(24);
});