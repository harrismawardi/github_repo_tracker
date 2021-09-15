import { default as Form } from '.';
import { screen } from '@testing-library/react';

// import getResults function and mock it
// import { getResults } from '../../actions';
//jest.mock('../../actions');


describe('Form', () => {

    it('renders the form', () => {
        renderWithReduxAndRouter(<Form />);
        const form = screen.getByLabelText('username-form');
        expect(form).toBeInTheDocument();
    })

    // it('submits the form', () => {
    //     renderWithReduxAndRouter(<Form />);
    //     const usernameInput = screen.getByLabelText('username');
    //     userEvent.type(usernameInput, 'test_username');
    //     expect(getResults).toHaveBeenCalled()
    // })

})
