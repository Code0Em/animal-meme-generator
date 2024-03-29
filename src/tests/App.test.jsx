import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Meme from '../components/Meme/Meme';
import { expect } from 'vitest';

// #1 Tests that App component renders without throwing an error.
it('App component renders without error', () => {
    render(<App />);
});

// #2: Tests that Cat and Dog buttons render in App component.
it('App component renders cat and dog buttons', () => {
    render(<App />);
    const dogBtn = screen.getByRole('button', { name: /dog/i });
    const catBtn = screen.getByRole('button', { name: /cat/i });

    expect(dogBtn && catBtn).toBeDefined();
});

// #3 Tests that when users clicks Cat or Dog button, the meme input fields (for user to add meme text) are rendered.
it('Clicking cat or dog button renders meme input fields', async () => {
    render(<App />);

    await userEvent.click(
        screen.getByRole('button', { name: /dog/i } || { name: /cat/i })
    );

    // Dev purposes only: called screen.debug to see structure of the DOM when click event is triggered (to identify value for memeInputs).
    // *Credit: Coder's understanding of how to use this developed thanks to freeCodeCamp (2022) How to Write Unit Tests for React Apps (https://www.freecodecamp.org/news/write-unit-tests-using-react-testing-library/).
    // screen.debug();

    // *Credit: Coder's understanding of these methods developed thanks to DEV Community (2024) Introduction to Testing React Components with Vite, Vitest and React Testing Library (https://dev.to/brslv/introduction-to-testing-react-components-with-vite-vitest-and-react-testing-library-8cb).
    const memeInputs = screen.getAllByRole('textbox', { name: '' });

    expect(memeInputs).toBeDefined();
});

// #4 Tests that meme image is rendered in Meme component.
it('Meme component renders an image for the meme', async () => {
    render(<Meme />);

    // Dev purposes only:
    // screen.debug();
    // *Credit: Code adapted from Timothy Amo (2021) Testing Conditional Render In React (https://www.youtube.com/watch?v=To2PzUT1lQ4).
    (await waitFor(() => expect(screen.getByRole('img', { name: / Meme/i })))).toBeInTheDocument()
});

// #5 Tests that when users clicks Start Again button, the Dog and Cat buttons are rendered.
it('Clicking start again button renders cat and dog buttons', async () => {
    render(<App />);

    await userEvent.click(
        screen.getByRole('button', { name: /start again/i })
    );

    // Dev purposes only:
    // screen.debug();

    const animalBtn = screen.getByRole('button', { name: /dog/i } && { name: /cat/i })

    expect(animalBtn).toBeDefined();
});
