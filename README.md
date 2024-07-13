Problem Statement: Quality education 

The beautiful thing about Education is nobody can take it away from you”. 

Education has always been an heated topic in India. Getting a world class quality education has always been a big question. Although there are multiple organizations claming to provide an best learning experiences, it might be true but not at all the extents. There are multiple problems existing in these education platform like lack of interaction between students and most important parent-teacher meeting session. Also there exist problem such like lack of monitoring sessions and providing what to focus on. Providing best resources all at a single place.
               For this we are introducing Adhayan “The best  E-learning platform for the student, by the student, of the student”. A platform to assist students in evaluating their strengths and weaknesses, accessing study materials, attending live lectures, resolving doubts, engaging in chat rooms,  facilitating parent-teacher interaction along with the provision of daily motivational resources. Availability of all these features at a single platform will ensure in better educational growth of learner.

Video Explanation: https://drive.google.com/file/d/1bCNR6PfSERdV3zl-kQIUl_kKTz5buUW2/view?usp=sharing

<b>Getting Started</b>


Overview

Vite (French word for "quick", pronounced /vit/, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).

A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

Vite is opinionated and comes with sensible defaults out of the box. Read about what's possible in the Features Guide. Support for frameworks or integration with other tools is possible through Plugins. The Config Section explains how to adapt Vite to your project if needed.

Vite is also highly extensible via its Plugin API and JavaScript API with full typing support.

You can learn more about the rationale behind the project in the Why Vite section.

Browser Support
During development, Vite sets esnext as the transform target, because we assume a modern browser is used and it supports all of the latest JavaScript and CSS features. This prevents syntax lowering, letting Vite serve modules as close as possible to the original source code.

For the production build, by default Vite targets browsers that support native ES Modules, native ESM dynamic import, and import.meta. Legacy browsers can be supported via the official @vitejs/plugin-legacy. See the Building for Production section for more details.


Vite requires Node.js version 18+. 20+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.


NPM

Yarn

PNPM

Bun
bash
$ npm create vite@latest
Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Vite + Vue project, run:

bash
# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app --template vue

# bun
bun create vite my-vue-app --template vue
See create-vite for more details on each supported template: vanilla, vanilla-ts, vue, vue-ts, react, react-ts, react-swc, react-swc-ts, preact, preact-ts, lit, lit-ts, svelte, svelte-ts, solid, solid-ts, qwik, qwik-ts.

Community Templates
create-vite is a tool to quickly start a project from a basic template for popular frameworks. Check out Awesome Vite for community maintained templates that include other tools or target different frameworks.

For a template at https://github.com/user/project, you can try it out online using https://github.stackblitz.com/user/project (adding .stackblitz after github to the URL of the project).

You can also use a tool like degit to scaffold your project with one of the templates. Assuming the project is on GitHub and uses main as the default branch, you can create a local copy using:

bash
npx degit user/project#main my-project
cd my-project

npm install
npm run dev
index.html and Project Root
One thing you may have noticed is that in a Vite project, index.html is front-and-central instead of being tucked away inside public. This is intentional: during development Vite is a server, and index.html is the entry point to your application.
Vite treats index.html as source code and part of the module graph. 