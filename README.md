# Personal Portfolio Website

This project is a personal portfolio website created using React and Create React App. It's designed to showcase projects, experience, and skills, and is configured for deployment to GitHub Pages.

## Target GitHub Pages Repository and URL

*   **Repository Name:** `pranta-biswas.github.io`
*   **Live URL:** `https://pranta-biswas.github.io`

## Development

Follow these steps to run the application locally:

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone <your-repository-url>
    cd pranta-biswas.github.io
    # Or cd portfolio-app if you cloned into a different structure
    ```

2.  **Install dependencies:**
    Make sure you have Node.js and npm installed.
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm start
    ```
    This will open the app in your default browser, usually at `http://localhost:3000`. The page will reload if you make edits.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Deployment to GitHub Pages

This project is configured to deploy to a specific GitHub repository named `pranta-biswas.github.io`, which will make the site live at `https://pranta-biswas.github.io`.

The `gh-pages` package is used for this. The `package.json` includes the necessary scripts:

*   `"homepage": "https://pranta-biswas.github.io"`
*   `"predeploy": "npm run build"`
*   `"deploy": "gh-pages -d build"`

**Deployment Steps:**

1.  **Ensure your main branch is up-to-date:**
    Commit and push any local changes to your main working branch (e.g., `main` or `master`).
    ```bash
    git add .
    git commit -m "Making updates before deployment"
    git push origin main
    # Replace 'main' with your default branch name if different
    ```

2.  **Run the deploy script:**
    ```bash
    npm run deploy
    ```
    This command will first run `npm run build` to create a production build of your app. Then, it will run `gh-pages -d build` to push the contents of the `build` folder to the `gh-pages` branch of your **`pranta-biswas.github.io` repository on GitHub**.

    GitHub Pages is typically configured to serve from the `gh-pages` branch for user/organization sites if the repository name is `<username>.github.io` (it will serve from the `main` branch's root or `/docs` folder). If your repository IS `pranta-biswas.github.io`, GitHub will automatically serve the content pushed to the `main` (or `master`) branch.

    **Important Correction for `<username>.github.io` repositories:**
    For a repository named `<username>.github.io` (like `pranta-biswas.github.io`), GitHub Pages serves directly from the `master` or `main` branch. The `gh-pages` package can still be used, but it typically pushes to a `gh-pages` branch. You might need to adjust your GitHub Pages settings for the `pranta-biswas.github.io` repo to serve from the `gh-pages` branch if `npm run deploy` pushes there, OR you would commit the *build output* directly to your `main` branch.

    **Simpler approach for `<username>.github.io`:**
    A common pattern for `username.github.io` sites is to have the *source code* in a branch like `develop` or `source`, and the *build output* in the `main`/`master` branch.

    **Let's assume the `npm run deploy` script correctly pushes to the branch GitHub Pages is looking for (often `gh-pages` or `main` if configured).** The `gh-pages` tool by default creates/pushes to a `gh-pages` branch. You will need to ensure your GitHub repository `pranta-biswas.github.io` is set to deploy from this `gh-pages` branch in its settings.

3.  **Verify Deployment:**
    After the script finishes, go to `https://pranta-biswas.github.io` in your browser. It might take a few minutes for GitHub Pages to update and serve the new content. Check your repository's "Actions" or "Pages" settings on GitHub for deployment status.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
