# Forge App Template

![Atlassian Forge](https://img.shields.io/badge/Atlassian%20Forge-cloud-blue?logo=atlassian)
![Yarn Berry](https://img.shields.io/badge/Yarn%20Berry-%20%20Plug'n'Play%20%2B%20Workspaces-2C8EBB?logo=yarn)
![Vite](https://img.shields.io/badge/Vite-gray?logo=vite)
![React](https://img.shields.io/badge/React-gray?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-gray?logo=typescript)
![ESLint](https://img.shields.io/badge/ESLint-gray?logo=eslint)
![Vitest](https://img.shields.io/badge/Vitest-unit--tests-6E9F18?logo=vitest)
![Playwright](https://img.shields.io/badge/Playwright-e2e--tests-45BA6E)

## Getting Started

All instructions assume that you are using macOS or Debian-based Linux on your host machine.

### Environment setup

- Install [nvm][nvm-docs]
- Run `nvm use` from project root to install required node.js version
- Run `corepack enable` to install required version of package manager (yarn)
- Install [@forge/cli][forge-cli-docs]

### Prepare development instance

- Create new cloud dev instance http://go.atlassian.com/cloud-dev
- Enable development mode on your cloud instance yourinstance.atlassian.net/plugins/servlet/upm (for jira) or yourinstance.atlassian.net/wiki/plugins/servlet/upm (for confluence)

## Development

### First start
1. Install dependencies
  ```bash
  yarn install 
  ```

2. Open `packages/forge-jira` and [log in with an Atlassian API token][forge-getting-started]. 
  ```bash
  cd packages/forge-jira && forge login
  ```

3. Register your app
  ```bash
  yarn forge:register # from anywhere places in the project 
  ```
  or
  ```bash
  forge register # from packages/forge-jira
  ```

4. Build frontend and deploy your app
  ```bash
  yarn forge:deploy # from anywhere places in the project
  ```

5. Install your app to your dev instance
  ```bash
  yarn forge:install # from anywhere places in the project
  ```

### Manual development

1. After the first installation (see First Start) you can build frontend and deploy changes manually 
  ```bash
  yarn forge:deploy
  ```

2. After major changes to the `manifest.yml`, deploy and upgrade the app:
  ```bash
  yarn forge:upgrade # from anywhere places in the project
  ```
   
### Start dev server

1. After the first installation (see First Start) you can start a Forge tunnel to redirect requests to localhost (vite dev server):
  ```bash
  yarn start # from root of project
  ```

2. After major changes to the `manifest.yml`, deploy and upgrade the app:
  ```bash
  yarn forge:upgrade # from anywhere places in the project
  ```

## Project structure

```
.
├── packages/
│   ├── forge-jira/
│   │   ├── src/
│   │   ├── manifest.yml
│   │   ├── package.json
│   │   └── ...
│   ├── frontend/
│   │   ├── src/
│   │   ├── index.html
│   │   ├── package.json
│   │   └── ...
│   └── shared/
│       ├── src/
│       ├── package.json
│       └── ...
├── tsconfig.json
├── package.json
└── yarn.lock
```

## License

This project is licensed under the [MIT License](./LICENSE).

[forge-cli-docs]: https://developer.atlassian.com/platform/forge/cli-reference/
[nvm-docs]: https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating
[forge-getting-started]: https://developer.atlassian.com/platform/forge/getting-started/#log-in-with-an-atlassian-api-token
