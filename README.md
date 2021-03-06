<h1 align="center">
  flag-poles ⛳ 
</h1>
<p align="center" style="font-size: 1.2rem;">Build fast and simple feature flags to integrate seamlessly into your react components</p>
<hr />

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]
[![Supports React][react-badge]][react]

## The problem

You need feature flags, to show or hide certain parts of your application and
you want it to be easy. You also don' want to pay a lot of money for this.

## This solution

The library offers a couple of solutions. The first solution, is a flag "guard"
which you can use to wrap your component passing a simple identifier attribute.

The second solution is a compound component which offers on/off branches in case
you want to show custom content if the feature flag is disabled.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `dependencies`:

```
npm install --save flag-poles
# or with yarn
yarn add flag-poles
```

> This package also depends on `react`. Please make sure you have it installed
> as well.

## Usage

> [Try it out in the browser][code-sandbox-try-it-out]

```jsx
import * as React from "react";
import { render } from "react-dom";
import { FlagProvider, FlagGuard, FlagSwitch } from "flag-poles";

const options = {
  flags: {
    my_flag: { enabled: false },
    my_flag_switch: { enabled: true },
  },
};

render(
  <FlagProvider value={options}>
    <div>You can see mee</div>
    <FlagGuard flag="my_flag">
      <div>I shall not be rendered</div>
    </FlagGuard>
    <FlagSwitch flag="my_flag_switch">
      <FlagSwitch.On>
        <div> Im a on switch</div>
      </FlagSwitch.On>
      <FlagSwitch.Off>
        <div> This will render if flag is off</div>
      </FlagSwitch.Off>
    </FlagSwitch>
    <div>You should see me too</div>
  </FlagProvider>,
  document.getElementById("root")
);
```

## Render Function

So the case might be you're not just expecting to render flags only based on enabled:true/false but
probably need a slightly more complex logic.
To accomplish this you can override default checkFlag function by:

```jsx
import * as React from "react";
import { render } from "react-dom";
import { FlagProvider, FlagGuard, FlagSwitch } from "flag-poles";

const customLogicFunction = () => true;

const options = {
  flags: {
    flag1: { enabled: true },
  },
  // This function will apply to all flags.
  checkFlag: (flag, flags) => flags[flag].enabled && customLogicFunction(),
};
```

## Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/tomascaraccia/"><img src="https://avatars.githubusercontent.com/u/64477810?v=3?s=100" width="100px;" alt=""/><br /><sub><b>Tomas Caraccia</b></sub></a><br /><a href="https://github.com/sarodspirit/flagpole/commits?author=sarodspirit" title="Code">💻</a> <a href="https://github.com/sarodspirit/flagpole/commits?author=sarodspirit" title="Documentation">📖</a> <a href="#infra-sarodspirit" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/sarodspirit/flagpole/commits?author=sarodspirit" title="Tests">⚠️</a> <a href="https://github.com/sarodspirit/flagpole/pulls?q=is%3Apr+reviewed-by%3Asarodspirit" title="Reviewed Pull Requests">👀</a> <a href="#blog-sarodspirit" title="Blogposts">📝</a> <a href="https://github.com/sarodspirit/flagpole/issues?q=author%3Asarodspirit" title="Bug reports">🐛</a> <a href="#example-sarodspirit" title="Examples">💡</a> <a href="#ideas-sarodspirit" title="Ideas, Planning, & Feedback">🤔</a> <a href="#talk-sarodspirit" title="Talks">📢</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/sarodspirit/flagpole/blob/master/CODE_OF_CONDUCT.md
[react-badge]: https://img.shields.io/badge/%E2%9A%9B%EF%B8%8F-(p)react-00d8ff.svg?style=flat-square
[react]: https://facebook.github.io/react/
[semver]: http://semver.org/
[code-sandbox-try-it-out]: https://codesandbox.io/s/flag-poles-22icb?file=/src/App.js

```

```
