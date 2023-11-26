# Github repository search application

## Instalation
You need to get your GitHub API token first. Follow this [link](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) to get more info how to get it.

When you have a token you need to create an env variable to it.
To do this make a copy of `.env.dist` file and name it `.env`. 
If you use *nix based systems you can run `cp .env.dist .env`.
After it you need to put your token for the `REACT_APP_GITHUB_TOKEN` variable.

If everything done correctrly then you can run the application but `npm run start`

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
