import AppInput from '../AppInput.vue';
import { render } from '@testing-library/vue';

test('It renders label', () => {
  const { getByLabelText } = render(AppInput, {
    props: {
      name: 'username',
      inputId: 'username',
    },
    slots: {
      // Note wrong attribute value.
      label: `<label for="user">Enter Username</label>`,
    },
  });

  getByLabelText('Enter Username');
});
