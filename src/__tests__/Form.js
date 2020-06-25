import Form from '../Form.vue';
import { render, fireEvent } from '@testing-library/vue';

test('User interaction with form', async () => {
  const { getByLabelText, getByText } = render(Form);
  const nameField = getByLabelText('Name');
  const emailField = getByLabelText('Email');
  const submitBtn = getByText('Submit');

  expect(submitBtn.disabled).toBe(true);

  // Update the name field.
  await fireEvent.update(nameField, 'James John');

  expect(submitBtn.disabled).toBe(true);

  // Add email.
  await fireEvent.update(emailField, 'james@example.com');
  expect(submitBtn.disabled).toBe(false);
});
