import { default as Form } from '.';
import { screen } from '@testing-library/react';

describe('Form', () => {

    it('renders the form', () => {
        renderWithReduxProvider(<Form />);
        const form = screen.getByLabelText('username-form');
        expect(form).toBeInTheDocument();
    })

})
