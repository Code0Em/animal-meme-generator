import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// #1 Tests that App component renders without throwing an error (WORKING).
it('App Component Renders Without Error', () => {
    render(<App />);
});