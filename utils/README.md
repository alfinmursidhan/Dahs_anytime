# Utils

This directory contains utility functions, constants, and custom hooks used across the application.

## Directory Structure

- `animations.ts`: Animation utility functions for transitions and effects
- `constants.ts`: Application-wide constant values
- `formatters.ts`: Functions for formatting data (currency, dates, etc.)
- `hooks/`: Custom React hooks

## Usage

Utilities are exported via the main `index.ts` file for cleaner imports:

```tsx
import { useScrollPosition, formatCurrency } from '@/utils';
``` 