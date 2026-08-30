---
name: write-tests
description: Writes unit tests or integration tests for the given React component, hook, or utility function. Triggered by "write test", "generate tests", or "/write-tests".
---

# Test Writer Skill

When asked to write tests for a specific file or component:

1. **Framework:** Use `Jest` and `@testing-library/react` by default (standard for Next.js).
2. **Path Convention:** Create the test file alongside the target file (e.g., `button.tsx` -> `button.test.tsx`) or inside a `__tests__` folder in the same directory, depending on existing project conventions.
3. **Coverage:**
   - Test the default rendering.
   - Test interaction events (clicks, input changes) using `userEvent` (preferred) or `fireEvent`.
   - Test accessibility basics (e.g., proper roles and ARIA labels if applicable).
4. **Mocks:** If the component uses Next.js navigation (`next/navigation`), context hooks (`useDocumentContext`), or API calls, implement basic Jest mocks for them.
5. **Output:** Provide the fully written test block in the file and confirm completion.

Example format:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MyComponent } from "./my-component";

describe("MyComponent", () => {
  it("renders correctly", () => {
    render(<MyComponent />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
```
