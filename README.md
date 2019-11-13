# Project Archived and moved to learnreactive.com
This was the first version of the project, and a lean version was created instead at https://learnreactive.com

This repository exists as prior art only, nothing new will be added here.

# Pentacle
https://pentacledev.com

# Get Started
Install [Docker](https://www.docker.com/get-started)

Install dependencies
```bash
npm i
```

## Web
Spin up the `web` app and proxy to the live API:
```bash
npm run web:start:live
```

You can proxy to the local `api` application too for doing API development and seeing changes in `web`:
```bash
npm run web:start:local
```
You'll need to spin up the `api` project, see below.

## API Development
> 🚨 API development is contingent upon your IP in an inclusion list to pull data from the source

For local API development spin up the api:
```bash
npm run api:start
```

It's now available at `localhost:3000/v1`, and the `web` app proxies and rewrites calls from `/api` to `:3000/`.

To build:
- `npm run api:build:app`
- `npm run api:build:image`
- `npm run api:publish`

This is an interim solution before CI/CD is setup.
Reach out to @jsonberry for deployment.
