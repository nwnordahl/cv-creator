# CV Creator

Create a stunning curriculum vitae, **100% job guarantee!**
This web application is fully responsive; Use it on your phone, tablet or pc (even your *ultra wide screen monitor!*)

## TODO

**(Tasks that are finished are marked with a "[*]".)**

**(Tasks that has work in progress are marked with a "[/]".)**

- Responsitivity [*]
- Make cv preview scale to different screen sizes (ratios should be same) [*]
- Export cv as pdf [/]
- Make it possible to add image
- Form control
- Make it possible to remove what is added
- Adjust font size and line height [/]
- Small adjustments in style [/]
- Adjust colors [/]
- Refactor code and organize the code in smaller components
- Add tests
- Dark theme
- Add example CV
- Save locally (localstorage)
- Save in the cloud (backend)

## A note on deployment
This project is hosted on [GitHub Pages](https://pages.github.com/), but as this is made with React,
there are some additional steps (build and deployment is not initiated per commit/push to upstream). To build and deploy the project, run the command

```bash
$ npm run deployment
```

(as described in [this article](https://medium.com/@isharamalaviarachchi/how-to-deploy-your-react-app-into-github-pages-b2c96292b18e)).

## Requirements

[Git](https://git-scm.com/), [node](https://nodejs.org/en/) and [npm](https://npm.community/) ([Node Version Manager](https://github.com/nvm-sh/nvm) is recommended for installing node and npm on macOS and Linux. [A similar manager](https://github.com/coreybutler/nvm-windows) is provided for Windows).

## How to set up (locally)

1. Clone this repository:

```bash
$ git clone https://github.com/nwnordahl/cv-creator.git
```

2. Install the required packages in the cloned repository with npm:

```bash
$ npm i
```

3. Run server:

```bash
$ npm run start
```

## How to use

If you want to use it locally, make sure that you have done the steps above. Open your browser, and go to `localhost:3000`.