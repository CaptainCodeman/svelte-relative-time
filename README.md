# svelte-relative-time

Tiny Svelte action (620 byte) and Component to render relative times.

Based partly on [Fast and Light Relative Time Strings in JS by Steve Sewell](https://www.builder.io/blog/relative-time) with output rounded to the nearest unit and live updates with a single interval timer.

## Features

- ✅ Action version is only 1006 bytes minified / 620 bytes gzipped
- ✅ Component version enables SSR
- ✅ Live updates by default (can be disabled)
- ✅ Uses single interval timer for updating all components
- ✅ Lightweight and GC friendly (single `Intl.RelativeTimeFormat` used per locale)
- ✅ Instance updates scheduled for new visible change
- ✅ Instance updates synchronized so all happen together

## Usage

Install using your package manager of choice:

    pnpm i svelte-relative-time

### use:action Version

The `use:action` version only runs on the client so it suitable for Single Page Apps or when Server Side Rendering of timestamps isn't important.

#### Import the action:

```ts
import { relativeTime } from 'svelte-relative-time'
```

#### Apply to any HTML Element - the elements `.textContent` time will be set to the timestamp:

```svelte
<span use:relativeTime={options} />
```

Options include:

- `date` the Date or number to base the relative time on
- `locale` the locale to use - defaults to browser default (`window.navigator.language`)
- `live` whether to update live - defaults to true

### Component Version

The Component version can be used for Server Side Rendering, but will require the locale to be set. See how to [synchronize locale between client and server when using SvelteKit](https://www.captaincodeman.com/internationalization-formatting-with-intl-ssr-sveltekit).

#### Import the component:

```ts
import RelativeTime from 'svelte-relative-time'

const date = Date.now()
const locale = 'en' // see note about on how to avoid hard coding this for SSR
```

#### Include Component with Properties:

```svelte
<RelativeTime class="font-semibold" {date} {locale} />
```

#### Custom Usage

If you need to apply additional styling based on the relative time, you can create your own component to use the additional `seconds`, `count`, and `units` properties in a callback (together with the formatted text) that can be used to determine any CSS or other DOM output required. Checkout the "styled" route for an example.

## Performance

The package is designed to be as lightweight as possible. A single timer is used (which only runs when there are any instances requiring live updates), a single `Intl.RelativeTimeFormat` instance per locale is created and re-used, and instances are only re-evaluated when their displayed value will next change. So even with thousands of instances shouldn't cause performance issues.
