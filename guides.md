# Blueprint UI: General guides

## About

Opinionated design system and component library for React.

It is correct to reference Blueprint UI as "the design system" or "the component library". Do not reference it as "Blueprint", "BPUI" or similar.

## Voice and tone

### Voice attributes

- **Authoritative yet approachable:** Be professional, accessible, and avoid complex language.
  - **Do:** Write simple, technical sentences anyone can understand.
  - **Don't:** Sound like a rigid corporate contract or a detached robot.
- **Intentionally concise:** Get straight to the point.
  - **Do:** Provide immediate information and an obvious next action.
  - **Don't:** Write walls of descriptive text where a single sentence would suffice.
- **Supportively grounded:** Set realistic expectations.
  - **Do:** State exactly what a feature executes and what its clear dependencies are.
  - **Don't:** Use hyperbolic marketing buzzwords like _"magical," "revolutionary,"_ or _"unbelievable."_
- **Globally inclusive:** Avoid regional slang, idioms, or assumptions.
  - **Do:** Use simple, translatable verbs and nouns.
  - **Don't:** Inject cultural jokes, colloquial expressions, or metaphors.

### Adapting tone by purpose

- **Direct:** For neutral states, tooltips, standard system feedback, and repetitive workflows. Get straight to the point.
  - **Correct:** Component library updated. Changes are ready to be published.
  - **Incorrect:** Great news! Blueprint just saved your awesome progress automatically.
- **Encouraging:** For empty states, onboarding flows, and success messages. Be welcoming and highlight value.
  - **Correct:** Deployment successful. Your application is now live.
  - **Incorrect:** Hurray! You did it! Your app is finally live out there on the web!
- **Formal:** For security alerts, legal disclaimers, compliance messages, and critical destructive actions. Remain calm, objective, and highly precise.
  - **Correct:** This action cannot be undone. All repository data will be permanently deleted.
  - **Incorrect:** Watch out! You're about to delete everything forever!
- **Empathetic:** For system errors, validation failures, and workflow blockers. Never blame the user. Clearly state what went wrong and provide an actionable path forward.
  - **Correct:** The design tokens could not be loaded. Please verify your theme configuration and try again.
  - **Incorrect:** Token load failed! You entered the wrong configuration values!

## Content

### General

- **Write with purpose (clarity and brevity):** Eliminate fluff, fillers, and unnecessary adjectives/adverbs.
  - **Correct:** Manage your design tokens in real time.
  - **Incorrect:** Manage your design tokens with an incredibly fast and amazingly simple setup.
- **Parenthetical casing:** Text inside parentheses should start with a lowercase letter unless it is a complete independent sentence, a proper noun, or an acronym.
  - **Correct:** The background task runs daily (at midnight).
  - **Incorrect:** The background task runs daily (At midnight).
- **Default to active voice:** Structure sentences with the subject performing the action.
  - **Correct:** Blueprint UI improves your app development process.
  - **Incorrect:** Your app development process will be improved by Blueprint UI.
- **Use plain language:** Avoid hyper-technical jargon, corporate lingo, and complex terminology.
  - **Correct:** Connect your account to start.
  - **Incorrect:** Leverage your account for high-throughput synchronization and optimized workflow.
- **Stick to sentence case:** Capitalize only the first word of a sentence, proper nouns, and product names.
  - **Correct:** View account settings and profile details.
  - **Incorrect:** View Account Settings and Profile Details.
- **Keep tone professional and culturally neutral:** Avoid slang, regional sayings, or forced humor.
  - **Correct:** Create an account to collaborate with your team.
  - **Incorrect:** Stop grinding alone! Create an account and smash goals with your crew.
- **Make actionable calls to action (CTAs):** The link text should describe the destination or action.
  - **Correct:** To update your component settings, [go to settings].
  - **Incorrect:** To update your component settings, [click here].

### Headings and titles

- **Punctuation:** Never end a heading with a period, colon, or semicolon.
- **Length:** Heading levels 1 and 2 (H1 and H2) must not exceed 8 words.
- **Capitalization:** Never use `UPPERCASE` for headings unless it is a legal or contractual document.
- **Alignment:** Headings and body text must share the same alignment. Marketing exception: H1/H2 can be centered while the body text remains left-aligned.
  - **Correct:** Manage your component library
  - **Incorrect:** Manage Your Component Library.

### Body text layout

- **Alignment:** Always left-aligned (or right-aligned for RTL languages). **Never justify text**.
- **Paragraph length:** 4 to 8 lines maximum.
- **Line length (measure):** 60 to 80 characters per line.
- **Word wrapping and truncation:** Do not use hyphenation to break long words across lines. Truncate using CSS text-overflow (`...`).
  - **Correct (Truncation):** Enterprise optimization engi...
  - **Incorrect (Hyphenation):** Enterprise optimization engi- ne.

### Typography styles and text decoration

- **Bold (`<strong>`):** For high emphasis, key terms, or field labels. Use sparingly.
  - **Correct**: Enter your **API key** to connect.
  - **Incorrect**: **Enter your API key to connect.**
- **Highlighter / background fill (`<mark>`):** Strictly for search results or selection text.
  - **Correct**: 10 results for **button**. The <mark>button</mark> component.
  - **Incorrect**: This is a <mark>critical alert</mark> regarding your server storage space.
- **Subscript and superscript:** For formulas or mathematical equations.
  - **Correct**: H<sub>2</sub>O
  - **Incorrect**: H2O
- **Text color:** To emphasize text on marketing headings and titles. Prefer brand color.
  - **Correct**: Your interface, <span style="color: #5187ec;">in one click.</span>
  - **Incorrect**: Your interface, **in one click**.
- **Underline (`text-underline`):** Reserved for hyperlinks (1px underline, 2px offset).
  - **Correct**: <a href="" style="text-decoration: 1px underline; text-underline-offset: 2px;">Go to documentation</a>
  - **Incorrect**: <a href="" style="text-decoration: 2px underline; text-underline-offset: 3px;">Go to documentation</a>
- **Strikethrough (`line-through`):** For deprecated features, deleted items, or original prices in discounts.
  - **Correct**: <del>$99</del> $49
  - **Incorrect**: <del>We are moving fast</del>
- **Quotation marks (""):** For literal UI strings, specific user input, or precise jargon.
  - **Correct**: The "Cancel" option will close the dialog.
  - **Incorrect**: The cancel option will close the dialog.
- **Italics (`<em>`):** For legal disclaimers, metadata, or quoted source text. Avoid in standard UI copy.
  - **Correct**: Refer to the book "The best interface is no interface" by _Golden Krishna_.
  - **Incorrect**: Refer to the book "The best interface is no interface" by Golden Krishna.
- **Emojis:** **Never use emojis.** Use SVG vector icons instead.
  - **Correct:** [Icon: Checkmark] Settings saved successfully.
  - **Incorrect:** Settings saved successfully! 🎉
- **Lists and labels:** Labels introducing lists must be **bold** and followed by a colon. Start with an uppercase letter after the colon. Do not capitalize each item inside an inline list unless proper nouns.
  - **Correct (Inline):** Your library includes: Buttons, inputs, and modals.
  - **Correct (Block Stack):**
    - **Assigned tags**:
      - Tag 1
      - Tag 2
  - **Incorrect:** Your library includes buttons, inputs, and modals.

### Physical addresses

- **Localization guardrail:** Follow the input structure of the destination country.
  - **Correct**: Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200 (Brazil)
  - **Incorrect**: Avenida Paulista, 1578, Bela Vista, São Paulo, SP, 01310 (Brazil)
- **Unit abbreviations:** Abbreviate only when space is highly constrained.
  - **Correct**: Suite 4B
  - **Incorrect**: Ste. 4B _(unless extreme space limits apply)_
- **Reference points:** Use metric units and verifiable reference landmarks.
  - **Correct**: 100 m from Central Park
  - **Incorrect**: 100 m from Blue Building
- **Postal codes:** Display absolute digit format matching regional standards.
  - **Correct**: 20121 (USA)
  - **Incorrect**: C_20121

### Naming, compliance and restrictions

- **File naming convention:** Use `snake_case` or `kebab-case`. English only. No special characters/spaces. Lowercase extensions. `vX.X` suffix for versions.
  - **Correct:** `blueprint_button-v1.2.tsx`
  - **Incorrect:** `Botón de Blueprint versión 1.2!.TSX`
- **Age specifications:** Omit a user's age unless required for compliance or functionality.
  - **Correct**: Verify that you are over 18 to proceed.
  - **Incorrect**: Juan, who is 25 years old, approved the request.
- **Legal compliance:** Include clear legal disclaimers for high-risk applications (finance, healthcare, education).
  - **Correct**: Trading involves risk. Consult a financial advisor before making investment decisions.
  - **Incorrect**: Invest now and get rich quick!

### Symbols and special characters

- **At sign (@):** For direct social media handles or system user tags only. Not for "at" times.
  - **Correct:** Mention @pedro in the pull request.
  - **Incorrect:** Standup scheduled @ 5 pm.
- **Hashtag (#):** For tags, channels, or social indexing. No spaces/special chars. Use `PascalCase` for multi-word tags.
  - **Correct:** Join the conversation at #DesignSystems.
  - **Incorrect:** Join the conversation at #design_systems.
- **Forward slash (/):** Do not use spaces around the forward slash.
  - **Correct:** Select your team/project workspace.
  - **Correct:** Available 24/7.
  - **Incorrect:** Select your team / project workspace.
- **Square brackets ([ ]):** For dynamic, variable string placeholders.
  - **Correct:** Component [component-name] has been generated.
  - **Incorrect:** Component (component-name) has been generated.
- **Exclamation marks (!):** Limit to celebratory empty states or critical error confirmation titles. Never use more than one.
  - **Correct:** Your deployment was successful!.
  - **Incorrect:** Update your settings!, Warning!.
- **Plus sign (+):** Indicates tool combos or shortcuts. Omit spaces between words.
  - **Correct:** Press Ctrl+C to copy.
  - **Incorrect:** Grow your traffic using SEO + SEM.
- **Oxford comma (,):** Adapt to the app locale to maintain native linguistic standards.
  - **Correct:** Manage layouts, components, and design tokens.
  - **Incorrect:** Administra diseños, componentes, y tokens.
- **Colon (:):** Do not capitalize the first word following a colon unless it starts an independent sentence or bullet.
  - **Correct:** The library includes: core components, hooks and utilities.
  - **Incorrect:** The library includes: Core components, hooks and utilities.
- **Hyphen (-):** Bind compound technical terms without spaces.
  - **Correct:** Implement a multi-phase deployment.
  - **Incorrect:** Implement a multi - phase deployment.
- **Em-dash (—):** Use with spaces around it to separate terms or attribute a quote.
  - **Correct:** Focus on what matters — your code.
  - **Incorrect:** Focus on what matters—your code.
- **Ellipsis (...):** Indicate text truncation or actions requiring further user configuration.
  - **Correct:** Export component data...
  - **Incorrect:** Export component data.

### Verb tenses

- **Present tense:** Primary narrative mode. For UI copy, descriptions, buttons, tooltips.
  - **Correct:** Blueprint UI centralizes your workspace in one place.
  - **Incorrect:** Blueprint UI will centralize your workspace in one place.
- **Past tense:** For completed actions, logs, and system state changes.
  - **Correct:** The system reduced rendering times by 40%.
  - **Incorrect:** The system reduces rendering times by 40% (when referring to an event that already occurred).
- **Future tense:** Only for automated, scheduled tasks, legal deadlines, or future phases.
  - **Correct:** The background task will execute at 00:00 UTC.
  - **Incorrect:** Blueprint UI will help you scale your apps soon.

### Calls to Action (CTAs)

- **Length and precision:** Target 1 to 3 words max. Use verbs that explain the outcome.
  - **Correct:** Activate, view all, download CSV.
  - **Incorrect:** Click here, learn more, go to the next step.
- **Context independence:** Never point the user directly to a physical UI position.
  - **Correct:** Select **activate** to initialize the module.
  - **Incorrect:** Press the button located on the top-left corner.

### Language and communication

#### Perspectives

- **Product-to-User (UI):**
  - **1st person singular (I / my):** User ownership (e.g. settings, contracts).
    - **Correct:** I accept the terms of service. / My workspace.
    - **Incorrect:** The user accepts the terms of service.
  - **2nd person singular (You / your):** General UI communication, alerts.
    - **Correct:** You are the administrator of this project.
    - **Incorrect:** The user is the administrator of this project.
  - **3rd person (It / they / passive):** Background processes, documentation.
    - **Correct:** A weekly usage report is generated automatically.
    - **Incorrect:** They generate a weekly usage report.
- **Corporate-to-Client (Support, marketing):**
  - **1st person plural (We / our / us):** Company addressing client.
    - **Correct:** Our team is here to help you.
    - **Incorrect:** The company is here to help you.
  - **2nd person (You / your):** Direct address to client.
    - **Correct:** We look forward to hearing your feedback.
    - **Incorrect:** The company looks forward to hearing your feedback.
  - **3rd person (It / they / passive):** Service catalogs, architecture statements.
    - **Correct:** The platform is under scheduled maintenance.
    - **Incorrect:** We are under continuous maintenance.

- **Pronouns and gender neutrality:** Avoid gendered pronouns (he/she) unless referencing verified profile data.
  - **Correct:** A team member updated the component.
  - **Incorrect:** She updated the component.
- **Contractions:** Use standard contractions (e.g., don't, you're). Exception: Avoid in critical error/legal contexts.
  - **Correct (Standard):** You're currently editing a shared component.
  - **Correct (Alert):** You are not authorized to access this repository.
  - **Incorrect**: You don't have permission to edit this component.

#### Messages and states

- **Emotionless neutrality:** State facts clearly, offer a logical next step. Do not use patronizing phrases ("Don't worry!", "Oops!").
- **Success states:**
  - **Approved terms:** Completed, ready, saved, activated, created, successfully.
  - **Prohibited terms:** Done, nice job, hooray.
  - **Structure:** Title (3–5 words), Body (impact/details), Optional CTA, Visual Anchor (Checkmark).
  - **Correct:** **Component published successfully**: Your new component is ready. You can now use it across your apps. <a>View component</a>
  - **Incorrect:** **Woohoo! Done!**: You successfully published a component just now. Click to open it up. <a>OK</a>
- **Error and warning states:** Never blame the user. Provide a clear path forward.
  - **User error:** Focus on correction.
    - **Correct:** Enter a valid hex color code.
    - **Incorrect:** You entered an invalid color format.
  - **System error:** Explain casually without exposing traces.
    - **Correct:** The server is temporarily unable to process this request. Please try again later.
    - **Incorrect:** SQL connection timeout exception: Failed to execute query on cluster-01.
  - **Vocabulary:** Use verify, retry, update, check, resolve. Avoid failed, bad, invalid, user error, wrong.
  - **Layout:** Critical errors use modals. Non-critical use inline text.
  - **Structure:** Title (3-5 words), Body (reason/solution), Optional CTA, Visual Anchor (Exclamation mark).
    - **Correct:** **Component naming error**: Could not save the component. Name can only contain letters, numbers, hyphens, and underscores.
    - **Incorrect:** **Error with your component**: There was an error saving the component. Try again.

#### Notifications and alerts

- **Structure:** Heading (event name), Body text (impact), Actionable link/CTA.
- **Web:** Use **Toast** components. Auto-dismiss after 3.5 seconds. Bottom-right positioning. Include close button.
- **Mobile native:** Use Snackbars/Banners. Audio is optional, never loud.

## Abbreviations and units

Prioritize write out full words in body copy. Only use abbreviations when UI is tight and/or the abbreviation is more common than the full word. No trailing periods for units/acronyms. Never pluralize unit symbols (`500 SLA`, not `500 SLAs`). Use ISO 3166-1 alpha-2 for countries.

- **Acronyms:** Spell out first mention followed by acronym in parentheses. Use `Tooltip` for single mentions. Do not spell out common acronyms (SEO, API, HTTP, etc.).
  - **Correct:** Enter your Personal Identification Number (PIN). Your PIN secures your wallet.
  - **Incorrect:** Enter your PIN (personal identification number).
- **Prohibited abbreviations and symbols:** Avoid Latin abbreviations or conversational symbols that hinder readability and screen readers. Use explicit, plain English equivalents.
  - **Exceptions:** `etc.`, `e.g.` and their locale equivalent.
  - **Correct:** Compare revenue this year and last year.
  - **Incorrect:** Compare revenue this year vs. last year.
  - **Correct:** Sales and marketing.
  - **Incorrect:** Sales and marketing.
- **Spacing:** Provide a non-breaking space between numbers and units (e.g. `10 s`, `5 MB`).
  - **Exceptions:** Angles (`90°`), currencies/percentages, Kelvin (`300K`).

### Time dimensions

| Unit   | Syntax  | Unit   | Syntax   | Unit  | Syntax |
| ------ | ------- | ------ | -------- | ----- | ------ |
| Second | `10 s`  | Minute | `25 min` | Hour  | `2 h`  |
| Day    | `5 d`   | Week   | `3 wk`   | Month | `6 mo` |
| Year   | `10 yr` |        |          |       |        |

### Magnitude / scale

| Scale     | Syntax | Scale     | Syntax   |
| --------- | ------ | --------- | -------- |
| Thousands | `10 K` | Millions  | `30.2 M` |
| Billions  | `5 B`  | Trillions | `10 T`   |

### Standard units

| Category | Examples                          | Category | Examples                                          |
| -------- | --------------------------------- | -------- | ------------------------------------------------- |
| Length   | `150 mm`, `30 cm`, `5 m`, `10 km` | Data     | `256 b`, `500 B`, `2 KB`, `50 MB`, `1 GB`, `5 TB` |
| Mass     | `200 mg`, `500 g`, `10 kg`, `2 t` | Temp     | `25°C`, `75°F`, `300K`                            |
| Fluid    | `250 mL`, `3 L`                   | Velocity | `10 m/s`, `80 km/h`                               |
| Screen   | `12pt`, `16px`, `1.5em`, `2rem`   | Energy   | `500 J`, `2 kWh`                                  |
| Area     | `50 m²`, `2 ha`                   | Angles   | `90°`, `3.14 rad`                                 |

## Formats

### Date, time and currencies

- Use `Intl.DateTimeFormat`, `Intl.NumberFormat`, or `date-fns` for localization.
- **Meridiem indicator:** Always lowercase, separated by a space, combined, no periods (`am` / `pm`).
  - **Correct:** 9:00 am, 6:30 pm
  - **Incorrect:** 9:00 AM, 6:30 p.m.
- **Days:** Show single digit without leading zero unless locale requires.
- **Months/weeks:** 3 letters max without trailing period.
  - **Correct (EN):** Jan, Feb, Mar
  - **Incorrect:** Jan., ene., march
- **Day-of-the-week nesting:** 3-letter day, comma, date.
  - **Correct:** Thu, Aug 15, 2026
- **Years:** Always 4 digits (`2026`, not `'26`).
- **Time:** Format `hh:mm` (24h) or `hh:mm am/pm` (12h). No milliseconds.
  - **Correct:** 16:00, 4:00 pm, 9:00:40 am
  - **Incorrect:** 9:00 PM, 9:00p.m., 9:00:40AM
- **Time zone/storage:** Use ISO 8601 for storage (`2026-06-09T18:20:57-06:00`). Render local time.
- **Ranges:** Separate with an em-dash (—) surrounded by spaces.
  - **Correct:** Jun 9, 2026 | 9:00 am — 6:00 pm | 9:00 — 11:30 am
  - **Incorrect:** 09:00 A.M.—06:00 P.M.

### Numbers and currencies

- **Digits:** Use integers (`3`), not text strings (`three`) for fast reading. Text is allowed at sentence starts.
  - **Correct:** You have 3 open pull requests.
  - **Incorrect:** You have three open pull requests.
- **Negative signs:** Bind directly to the left without space (`-15%`).
- **Percentages:** Attach directly to the integer (`25%`).
- **Decimals:** Default to two decimal places. Under 1 integer must have a leading zero (`0.25`).
- **Ordinal values:** Spell out in copy (`first phase`), use abbreviations in tight UI (`1st`).
- **Phone numbers:** Use E.164 standard (`+502 2385-7000`).
- **Currency symbol:** Adapt to locale.
- **Decimal zeroes:** Hide in clean UI cards, enforce two decimals in tables. Use tabular monospaced font in tables.
- **Negative financials:** Minus sign left of symbol without space (`-Q 50.25`).
- **Price ranges:** Symbol on both sides with em-dash and spaces (`Q 5,000 — Q 15,000`).
- **High-magnitude/zero:** Use text for millions in copy (`Q 1.5 million`). For zero use localized "Free" in marketing or `Q 0` in tables.
  - **Correct:** Q 500 / $ 1,250.50 | -Q 50.25 | Q 5,000 — Q 15,000
  - **Incorrect:** Q.500, Q 5,000—15,000, -$50.25

### Combined formats

To ensure clarity, here are explicit examples combining dates, times, numbers, and currencies into standard reporting layouts:

- **Correct (Invoice line):** Due on Thu, Aug 15, 2026, 5:00 pm — Total: $ 1,250.50
- **Correct (Transaction log):** Mar 10, 2026, 14:30 | +Q 3,000.00 (2 items)
- **Correct (Analytics dashboard):** Traffic on Mon, Jan 1, 2026 — 4.5 K visitors (+12%)
- **Incorrect:** Due on Aug 15th 2026 by 5 PM. Total:$1250.5

## Engineering standards

### Component architecture and React standards

- **Functional scoping:** Use arrow functions for components. Use `function` for pure utilities.
- **Composition pattern:** Default to **Compound Components** for complex nodes (Select, Modal, Tabs).
- **Encapsulation:** Export compound component, children, and types from a single file.
- **Properties and state contracts:**
  - Prefix boolean configuration props with `include` or `should`.
  - Avoid `is` prefixes for internal DOM/boolean states in JSX properties. Only parent states should use `is`.
  - Never inject JSX code block comments `{/* ... */}` inside the tree template. Prefer semantic HTML over React Fragments `<></>`.
  - Avoid prefixing interface names with `I`. Reserve `Type` for single line types.
  - **Correct:**
    ```tsx
    interface ButtonProps {
      includeSeparator?: boolean
    }
    export const Button = ({ includeSeparator = false }: ButtonProps) => {
      const disabled = useButtonState()
      return (
        <button disabled={disabled}>
          {includeSeparator andand <span className='separator' />}
          <slot />
        </button>
      )
    }
    ```
  - **Incorrect:**
    ```tsx
    export function CustomButton(props: { isDisabled: boolean }) {
      return (
        <>
          {/* check if disabled */}
          <button disabled={props.isDisabled}>Click</button>
        </>
      )
    }
    ```

### Logic and control flow

- **Parameter signatures:** Enforce object destructuring for 2+ arguments. Single args are implicit.
- **Hoisting:** Define functions before invocation.
- **Complexity caps:** Max cognitive complexity score of 15.
- **Switch-cases:** Favor object/record lookup maps over `switch` statements.
- **Control nesting:** Max 2 nested ternaries. Use early returns over deep `else` branches.
  - **Correct:**

    ```typescript
    const statusMap = {
      success: 'text-emerald-500',
      error: 'text-rose-500',
      pending: 'text-amber-500',
    } as const

    const getStatusStyle = (status: keyof typeof statusMap) => statusMap[status]
    ```

  - **Incorrect:**
    ```typescript
    function getStatusStyle(status) {
      switch (status) {
        case 'success':
          return 'text-emerald-500'
        /* ... */
      }
    }
    ```

### Strict TypeScript and type safety

- **Zero-tolerance:** Prohibit `any`. Use `unknown` for unsafe parsing.
- **Location mapping:** Export types at the same relative level as literal values/components.
- **Null pointer safety:** Do not use non-null assertions (`!`). Use strict optional properties (`?`).
- **Enums disallowed:** Use `as const` object literals instead of `enum`.
  - **Correct:**
    ```typescript
    export const ThemeType = { Light: 'light', Dark: 'dark' } as const
    type Theme = (typeof ThemeType)[keyof typeof ThemeType]
    ```
  - **Incorrect:**
    ```typescript
    enum Theme {
      Light = 'light',
      Dark = 'dark',
    }
    ```

### JavaScript and Node.js engine standards

- **Native modules:** Prefix core imports with `node:`.
- **Loop optimizations:** Use `for...of` over `Array.prototype.forEach` in intensive loops.
- **String processing:** Use template literals exclusively over string concatenation (`+`).
- **Object integrity:** Never use `delete`. Use object destructuring to omit keys.
- **Error handling:** Use `new Error()`. Never resolve catch-blocks empty. Use `console.error` or a logger.
- **Async flow:** Use `async/await` syntax over raw `Promise` `.then()` chaining. Do not mix both paradigms in the same block.
- **Runtime environments:** Validate environment variables using schema parsers (e.g. Zod) at initialization. Do not query raw `process.env` downstream.
- **ESM absolute paths:** Prohibit `__dirname` or `__filename`. Use `import.meta.url`.

### Accessibility (a11y)

- **WCAG compliance:** Blueprint UI guarantees full compliance with **WCAG 2.2 AA** and always strives for **WCAG AAA** standards.
- **Color contrast:** Maintain a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text/UI components (AA). Aim for 7:1 for normal text (AAA) whenever possible.
- **Semantic DOM and form layouts:** Priority 1 is semantic native elements (`<main>`, `<nav>`, `<button>`). `<label>` must encapsulate a readable string and use a matching `htmlFor`. Non-text icons require descriptive captions via `title`, `aria-label`, or a `Tooltip`.
- **Behavioral controls:** Active elements must be naturally focusable. Bind `onFocus`/`onBlur` with `onMouseOver`/`onMouseOut` for pointer device synchronization. Avoid arbitrary `accessKey` handlers.
- **Keyboard navigation:** Ensure all interactive features are operable through a keyboard interface without requiring specific timings. Never use `aria-hidden="true"` on focused coordinates or enforce non-interactive element tab indexing (`tabIndex={1}`).
- **Screen readers:** Use `aria-live` for dynamic content updates (e.g., toasts, errors). Provide `.sr-only` utility classes for visually hidden but structurally required text.

### System safety and execution performance

- **Strict assertions:** Use triple-equals (`===`).
- **Browser sandbox:** `target="_blank"` requires `rel="noopener noreferrer"`.
- **Storage guardrails:** Do not mutate `document.cookie` directly.
- **Iteration iterators:** React list `key`s must be mathematically unique. Do not use array `index`.

### Documentation and testing

- **Quality gate workflow:** Write code + JSDoc -> Storybook -> Vitest (95% cov) -> Playwright (a11y validation).
- **JSDoc:** Every custom component, hook, and utility needs a JSDoc definition.
  ```typescript
  /**
   * A highly accessible, custom interactive switch element.
   * @component
   * @param {string} label - The descriptive structural text linked to the switch element.
   * @param {boolean} checked - The runtime state control indicator flag.
   * @param {() => void} onChange - Callback triggered when the switch value changes.
   */
  ```
- **Storybook:** Every UI component must have a `.stories.tsx` sandbox using Storybook Controls.
- **Testing:** 95% coverage in Vitest for utilities. Components use semantic queries (e.g., `screen.getByRole`). Zero a11y violations in Playwright.
- **Test assertions:** Avoid brittle UI snapshot tests. Use explicit assertions to test component behaviors and state changes.
- **Mocking:** Always mock external API boundaries and third-party dependencies during unit tests to prevent network flakiness.

### Internationalization (i18n)

- **The 30% expansion rule:** Strings expand up to 35% when translated. Avoid fixed widths; use fluid widths or max-width.
- **Never concatenate dynamic strings:** Use templates with injection slots to respect different language syntaxes.
  - **Correct:** `translate('user_joined_team', { user: name, team: teamName })`
  - **Incorrect:** `name + translate(' joined ') + teamName`

### Governance

- **Evolution pipeline:** Draft proposal -> Storybook sandbox -> Stable core integration -> Deprecation.
- **Deprecation and breaking changes:**
  - **Graceful deprecation alerts:** Component structural APIs cannot be removed abruptly. If a component token or full element is replaced, it must be tagged with a `@deprecated` JSDoc property annotation alerting active engineering instances in their IDE windows.
  - **Semantic versioning compliance:** Blueprint UI strictly tracks the **SemVer** convention matrix:
    - **Patch changes (`0.0.X`):** Internal logic optimizations or documentation updates. Zero API changes.
    - **Minor changes (`0.X.0`):** Introduction of brand new components, features, or optional parameters. Fully backwards compatible.
    - **Major changes (`X.0.0`):** Breaking structural re-architectures, changing core prop tokens, or removing deprecated component sub-nodes completely. Requires a formal migration manual.

## Design tokens

Blueprint UI leverages Tailwind CSS v4 and a highly structured CSS variable token system (`globals.css`). Never use raw CSS values or arbitrary brackets for spacing, colors, or typography.

### Colors and themes

- **Semantic variables:** Always use functional role-based color variables (e.g., `bg-background-brand`, `text-text-inverted`, `border-border-danger`) instead of raw primitives (`bg-brand-600`).
  - **Correct:** `<div className="bg-background-brand text-text-inverted">`
  - **Incorrect:** `<div className="bg-brand-600 text-neutral-100">`
- **Dark mode:** Do not manually toggle `dark:` utility prefixes in components. Rely exclusively on CSS semantic variables which automatically respond to the `.dark` class scope.
  - **Correct:** `<div className="border-border-base">` (automatically handles light/dark via CSS variables).
  - **Incorrect:** `<div className="border-neutral-200 dark:border-neutral-600">`
- **Feedback and status:** Exclusively use `info`, `success`, `warning`, `danger`, and `idle` prefixes for system state indicators, rather than arbitrary brand colors.

### Spacing and layout

- **Semantic spacing:** Prefer semantic scales (`p-md`, `gap-sm`) or default Tailwind multiples of 4 over arbitrary pixel brackets.
  - **Correct:** `<div className="p-md gap-sm">`
  - **Incorrect:** `<div className="p-[16px] gap-[8px]">`
- **Icon sizing:** Strictly use the predefined icon spacing scales (e.g., `size-icon-sm`, `size-icon-base`).
- **Touch targets:** For interactive elements that might be visually small, use the `@utility touch-target` (or the equivalent Tailwind `touch-target` class) to ensure compliance with a minimum 44x44px hit area.

### Typography and radiuses

- **Semantic typography:** Do not compose fonts manually via `text-sm font-bold leading-tight`. Use the consolidated token roles mapping to `globals.css` scales.
  - **Correct:** `<h2 className="text-heading-2-base">`
  - **Incorrect:** `<h2 className="text-3xl font-extrabold tracking-heading">`
- **Corner shapes:** Blueprint UI enforces "squircle" radiuses progressively on supporting browsers. Use standard `rounded-sm`, `rounded-base`, or `rounded-lg` tokens exclusively.

### Motion and transitions

- **Semantic durations:** Use mapped timing variables (`duration-fast`, `duration-base`, `duration-slow`) over hardcoded millisecond values.
- **Easing curves:** Use standard design system easing functions (`ease-base`, `ease-out`, `ease-elastic`). Do not write custom `cubic-bezier` curves directly in components.
- **Reduced motion:** All UI animations must respect system preferences. Blueprint UI handles this globally via CSS `@media (prefers-reduced-motion: reduce)`, instantly snapping durations to `0.01ms`. Do not hardcode manual `@media` queries into React components.
  - **Correct:** `<div className="transition-all duration-fast ease-base">`
  - **Incorrect:** `<div className="transition-all duration-[250ms] ease-[cubic-bezier(0.28,0.1,0.34,1)]">`

### Token architecture and creation

When creating or maintaining CSS variable tokens in `globals.css`, adhere to the following strict naming conventions and structural patterns.

- **The "base" starting point:** Never use the word `default` or `normal` to establish the primary value of a scale. Always use `base`.
  - **Correct:** `border-base`, `ease-base`, `text-body-base`, `duration-base`, `radius-base`.
  - **Incorrect:** `border-default`, `ease-normal`, `radius-md`.
- **Scale references:** When a token represents a progression without a natural "base" starting point (such as breakpoints or structural containers), use standard t-shirt sizes (`xs`, `sm`, `md`, `lg`, `xl`).
- **Naming structure:** Tokens must follow a predictable, segmented taxonomy: `--{property}-{context}-{modifier}-{state}`.
  - **Property:** What it affects (`background`, `text`, `border`).
  - **Context:** The role it plays (`surface`, `brand`, `info`, `input`).
  - **Modifier (optional):** The weight or variant (`alt`, `inverted`, `subtlest`, `bold`).
  - **State (optional):** The interaction phase (`hover`, `active`). Focus is typically handled by ring utilities.
    - **Correct:** `--background-surface-alt-hover`
    - **Incorrect:** `--background-hover-surface-alt`
- **State modifiers:** Interaction states must cascade logically. We use `-hover` and `-active`. We do not define `-disabled` color states; disabled states are managed universally via the `--opacity-disabled` utility.
- **Emphasis modifiers:** To express visual hierarchy within the same semantic family, use `-subtlest`, `-subtle`, and `-bold` rather than creating arbitrary numbered steps.
  - **Correct:** `--background-brand-subtlest`, `--background-brand`, `--background-brand-bold`
  - **Incorrect:** `--background-brand-light`, `--background-brand-dark`
- **Primitive and semantic abstraction:**
  - **Primitives (`:root`):** Static values that don't match tailwind naming convention or semantic roles such as colors or typography scales. These are raw values and should almost never be consumed directly by UI components. This avoids a two-step process when adding new token values.
    - **Exception:** The radiuses are defined at primitives level to validate squircle support so it adapts the values.
  - **Semantics (`.light` / `.dark`):** Dynamic values mapped to context-aware roles. Only semantic tokens should be exported to Tailwind utilities.
