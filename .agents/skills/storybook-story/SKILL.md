---
name: storybook-story
description: >
  Use this skill whenever the user asks to create, write, add, or scaffold a Storybook story
  for a component in this design system. Triggers on requests like "write a story for X",
  "add stories for Y", "scaffold the Z story", or when reviewing/improving existing story files.
  Always use this skill — do not improvise story structure from memory.
---

# Storybook Story Skill

## Stack

- Storybook 10, CSF Next (CSF4) with typesafe factory via `preview.meta()`
- React + TypeScript
- CVA (`class-variance-authority`) for component variants
- Custom `preview.meta()` / `meta.story()` helpers (not raw Storybook `Meta`/`StoryObj`)

---

## File structure

Stories live next to components. If the component is at:
```
src/components/ui/typography/text.tsx
```
The story goes at:
```
src/components/ui/typography/text.stories.tsx
```

---

## Import pattern

```tsx
import preview from '../../../../.storybook/preview'   // adjust depth as needed
import { ComponentName } from '../../../components/...' // actual component path
```

---

## Title conventions

The `title` field controls sidebar grouping. Use **exactly** these top-level buckets:

| Bucket | Contents |
|---|---|
| `Components/Typography/` | `Text`, `Heading`, `Label`, `Abbr`, `List`, `Blockquote`, `Code`, `Caption` and any other text-rendering primitive |
| `Components/UI/` | `Button`, `Input`, `Select`, `Datepicker`, `Checkbox`, `Toggle`, `Badge`, `Tag`, `Avatar`, `Card`, `Modal`, `Tooltip`, `Popover`, and any other component... |

> When unsure, put it in the bucket that matches its primary HTML semantic role, not its visual appearance.

Full example: `title: 'Components/Typography/Text'`

---

## Description conventions

The description goes in `parameters.docs.description.component`. It must be:

- **Brief** — 1–3 sentences max
- **Specific** — name the HTML element rendered, key props, and primary usage rule
- **Varied in format** — do not always use the same sentence structure
- **MD-safe** — backticks for element names, prop names, and values; bold for emphasis where it aids scanning

### Patterns by component type (two categories for now)

**Text-rendering primitives** (Text, Heading, Label, Caption, etc.):
> Name the HTML tag, the variant/size axes, and why to prefer it over the raw tag.
```
The semantic `<p>` element for body copy. Supports **semantic color variants** (`primary`, `secondary`, `danger`, etc.) and **responsive sizing** via per-breakpoint props (`tablet`, `laptop`, `desktop`, `display`). Use instead of raw `<p>` tags throughout the system to ensure consistent typography tokens and theme transitions.
```

**UI components** (Button, Input, Toggle, and any other component):
> Lead with purpose, name the key variant axes, note any important behavioral detail.
```
The primary interaction primitive. `variant` controls visual hierarchy (`solid`, `outline`, `ghost`), `size` scales touch targets, and `loading` replaces children with a spinner while disabling interaction.
```

---

## Args defaults

Always mirror CVA `defaultVariants` in `args`. This ensures Storybook controls start in the correct state.

```tsx
args: {
  children: 'The quick brown fox jumps over the lazy dog.', // or a realistic default
  variant: 'primary',   // match CVA defaultVariants
  size: 'base',         // match CVA defaultVariants
  center: false,        // match CVA defaultVariants
},
```

For non-text components, use realistic placeholder content (e.g. `children: 'Click me'` for Button).

---

## Story naming & ordering

Export named stories in this order when applicable:

1. **Primary** — default args, no overrides (the "plain" state)
2. **Variant stories** — one per meaningful `variant` value (Secondary, Tertiary, Brand, Danger…)
3. **Size stories** — if size variation is a key axis (Small, Large…)
4. **State stories** — Disabled, Loading, Error, etc.
5. **Composition stories** — showing the component used in a realistic context
6. **Compound/integration stories** — showing the compound component if it has one and its subcomponents in a realistic context

Name stories after what they *demonstrate*, not the prop value itself when possible:
- ✅ `Danger` not `VariantDanger`
- ✅ `Centered` not `CenterTrue`
- ✅ `AllSizes` not `SizeStory`

---

## Full boilerplate

```tsx
import preview from '../../../../.storybook/preview'
import { ComponentName } from '../../../components/path/to/component'

const meta = preview.meta({
  title: 'Components/[Bucket]/[ComponentName]',
  component: ComponentName,
  subcomponents: [/* any subcomponents like ListItem from List */],
  parameters: {
    layout: 'centered', // 'padded' as appropriate
    docs: {
      description: {
        component: '/* see description conventions above */',
      },
    },
  },
  args: {
    // Mirror CVA defaultVariants exactly
  },
})

export const Primary = meta.story({})

// Variant stories
export const Secondary = meta.story({ args: { variant: 'secondary' } })
export const Tertiary  = meta.story({ args: { variant: 'tertiary' } })
// ...continue for each meaningful variant

// Size stories (if applicable)
export const Small = meta.story({ args: { size: 'sm' } })
export const Large = meta.story({ args: { size: 'lg' } })

// or if the component has many sizes, a good way to show them is to create a story that shows all the sizes within a decorator (wrapper div with flex-col className)
export const Sizes = meta.story({
  decorators: [
    (args) => (
      <div className='flex flex-col gap-4'>
        <Text {...args} size='xs'>Text x-small</Text>
        <Text {...args} size='sm'>Text small</Text>
        <Text {...args} size='base'>Text base</Text>
        <Text {...args} size='lg'>Text large</Text>
        <Text {...args} size='xl'>Text x-large</Text>
      </div>
    ),
  ],
})

// State stories (if applicable)
export const Disabled = meta.story({ args: { disabled: true } })
export const Loading = meta.story({ args: { loading: true } })
export const Error = meta.story({ args: { error: true } })

// Composition stories (always include `With...` prefix)
export const WithIcon = meta.story({ args: { icon: 'search' } })
export const WithTextAndIcon = meta.story({ args: { icon: 'search', children: 'Search' } })
```

---

## Layout parameter guidance

| Value | When to use |
|---|---|
| `'centered'` | Most components — renders in the middle of the canvas |
| `'padded'` | Full-width components that still need breathing room |

---

## What NOT to do

- Do not use raw `Meta`/`StoryObj` types — always use `preview.meta()` and `meta.story()`
- Do not invent `parameters.docs.controls`, `parameters.docs.canvas` etc. — these don't exist as simple flags
- Do not omit `args` defaults — always mirror CVA `defaultVariants`
- Do not write identical descriptions — adapt format to the component type
- Do not put UI components in Typography or vice versa
