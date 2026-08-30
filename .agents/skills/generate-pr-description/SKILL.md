---
name: generate-pr-description
description: Analyzes git diffs and generates a formatted Pull Request description and commit message. Triggered by "write pr description", "generate commit", or "/pr-desc".
---

# PR Description & Commit Generator Skill

When triggered to generate PR descriptions or commit messages:

1. **Analysis:** Run `git diff` or review the provided diff to understand what has changed in the codebase.
2. **Commit Message:**
   - Write a single concise line following Conventional Commits format (e.g., `feat(editor): add first draft modal` or `fix(ui): resolve z-index overlap in header`).
3. **PR Description:** Generate a markdown-formatted PR description including:
   - **Title:** Same as the commit message.
   - **Summary:** 1-2 sentence overview of the changes.
   - **Changes:** A bulleted list of the specific technical changes made, organized by file or component area.
   - **Impact/Testing:** Mention how this impacts the user or what needs to be tested to verify the changes.
4. **Format:** Output the result as plain markdown, ready for the user to copy-paste into GitHub/GitLab.
