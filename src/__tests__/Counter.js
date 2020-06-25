import Counter from '../Counter.vue';
import { render, fireEvent } from '@testing-library/vue';

test('It renders correctly', () => {
  const { getByText } = render(Counter);

  getByText('Count: 0');
});

test('It correctly responds to button clicks', async () => {
  const { getByText } = render(Counter, {});

  // Check initial state
  getByText('Count: 0');

  const addButton = getByText('Add');
  const subtractButton = getByText('Subtract');

  // Click the Add button.
  await fireEvent.click(addButton);
  // Counter should be updated.
  getByText('Count: 1');

  // Click the subtract button.
  await fireEvent.click(subtractButton);
  // Counter should be updated.
  getByText('Count: 0');

  // Further clicks
  await fireEvent.click(addButton);
  await fireEvent.click(addButton);
  await fireEvent.click(addButton);
  await fireEvent.click(addButton);
  getByText('Count: 4');

  await fireEvent.click(subtractButton);
  await fireEvent.click(subtractButton);
  getByText('Count: 2');
});
