# React Console Notifier

A small React package that shows real-time notifications for console logs (`log`, `warn`, `error`, etc.) during
development.

It keeps the original console behavior, so logs still appear in the browser console. You can configure which log types
you want to track.

![npm](https://img.shields.io/npm/v/react-console-notify)
![license](https://img.shields.io/npm/l/react-console-notify)
![GitHub Repo stars](https://img.shields.io/github/stars/Wexop/react-console-notify)

**[Live demo here]([GitHub Repo stars](https://img.shields.io/github/stars/tonpseudo/react-console-notify))**

![Notifications](https://i.imgur.com/hktWMla.png)

## Installation

npm

```bash
npm install react-console-notify
```

pnpm

```bash
pnpm i react-console-notify
```

yarn

```bash
yarn add react-console-notify
```

## Usage

```typescript jsx
import ConsoleNotifier from "react-console-notify";


function App() {
  return (
    <>
      <ConsoleNotifier enabled/>
      {
        /* your app content */
      }
    </>
  );

}
```

## Props

| Prop                | Type                                          | Default                                     | Description                                                                              |
|---------------------|-----------------------------------------------|---------------------------------------------|------------------------------------------------------------------------------------------|
| `types`             | `LogType[]` (`"log"`, `"warn"`, etc.)         | `["log", "warn", "error", "info", "debug"]` | Console methods to intercept and notify.                                                 |
| `onNotify`          | `(type: LogType, ...args: unknown[]) => void` | `undefined`                                 | Custom callback called on each intercepted log. Overrides default notification behavior. |
| `colorMap`          | `Record<LogType, string>`                     | See below                                   | Allows custom colors per log type.                                                       |
| `children`          | `ReactNode`                                   | `undefined`                                 | Optional children to render within the same tree.                                        |
| `enabled`           | `boolean`                                     | `true`                                      | Enable notifications or not. This can be useful to disable on production environment.    |
| `position`          | `"top-right"` \| `"top-left"`                 | `"top-right"`                               | Position of the notification container.                                                  |
| `duration`          | `number \| null`                              | `5000` (ms)                                 | Time before a log disappears. Set to `null` for persistent logs.                         |
| `backgroundOpacity` | `number` (`0` → transparent, `1` → solid)     | `0.5`                                       | Background transparency of the notification.                                             |
| `containerHeight`   | `number \| string`                            | `500px`                                     | Max height of the notification container (can be px or `%`).                             |

## Default colorMap

```
{
    log: "#6c757d",    // Gray
    warn: "#f4b400",   // Yellow
    error: "#f28b82",  // Red
    info: "#719dcb",   // Blue
    debug: "#61b96e",  // Green
}
```

## Features

Displays console logs as visible notifications on screen.

Filter by log types (log, warn, error, info, debug).

Customizable colors.

Configurable position (top-right or top-left).

Notifications auto-dismiss after a configurable duration.

## Example

You can run the example project by cloning this repo, and run

```bash

npm i && npm run dev:example

```

## Contributing

Contributions are welcome! Feel free to fork, open issues, or submit pull requests.
