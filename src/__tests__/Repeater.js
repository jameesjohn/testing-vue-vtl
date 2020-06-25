import Repeater from '../Repeater.vue';
import { render, fireEvent } from '@testing-library/vue';

test('User can type and see output on the screen', async () => {
  const { getByLabelText, getByText, debug } = render(Repeater);

  // Get input associated with label.
  const input = getByLabelText('Start Typing');
  // Update the input
  await fireEvent.update(input, 'Sample text');

  // Assert that the update is successful.
  getByText('You typed: Sample text');
});
