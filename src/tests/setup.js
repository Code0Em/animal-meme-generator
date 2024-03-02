// Imports `expect` and `afterEach` methods from the `vitest` package.
import { expect, afterEach } from 'vitest';

// Imports the `cleanup` method from `@testing-library/react`.
import { cleanup } from '@testing-library/react';

// Imports the `matchers` default object from `@testing-library/jest-dom/matchers`
import * as matchers from '@testing-library/jest-dom/matchers';

// Extends the `expect` method to include the matcher methods from RTL.
expect.extend(matchers);

// Invokes the `afterEach` method by passing an arrow function which calls `cleanup()`.
afterEach(() => {
    cleanup();
});