## 2024-05-14 - Improve Form Inputs A11y
**Learning:** Found inputs using visual "labels" that were missing `id` to associate `htmlFor`, and interactive button elements lacking `aria-label` or role attributes.
**Action:** Always link labels to inputs with IDs, and use `aria-label` or `aria-hidden` appropriately for purely visual icon elements.

## 2024-05-15 - Cyber Aesthetic Loading States & Font Icon A11y
**Learning:** Found that using font-based icons (like Google Material Symbols) without `aria-hidden="true"` causes screen readers to read the literal text (e.g., "arrow_forward_ios"), which hurts accessibility. Also, adding sleek, animated loading states to forms ("UPLOADING...", glowing pulses) significantly improves user feedback and fits the cyber-luxury theme perfectly.
**Action:** Always add `aria-hidden="true"` to purely decorative font icons. Always ensure forms have a disabled and loading state when submitting, utilizing the existing Framer Motion animations to match the project's premium feel.
