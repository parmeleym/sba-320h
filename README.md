# Quick Draw Trivia (PerScholas SBA320.H)

This project was made for PerScholas React Training Course to demonstrate understanding of React and Redux. Quick Draw Trivia uses the publicly available `opentdb.com/api` to source questions, correct answers and incorrect answers. Information recieved from the API is stored and managed in a Redux state container where it is used by multiple components of the application to provide a reactive user interface to the client. Due to time restraints, the overall scope of the project had to be reduced and this created some known bugs (refer below to the **_Known Issues_** section). 

## Live Link

**_Note:_** This application is optimized for modern web browsers running in fullscreen mode on a laptop/desktop at this time. Further optimization for dynamic rendering may come at  a later time. 

To demo the application, please click on the following link(redirect to Netlify):<br />
[Quick Draw Trivia Demo](https://soft-meringue-15a8cd.netlify.app/)

## Technologies Used

Quick Draw Trivia was created with the following technologies:

- React
- React Toolkit
- Redux
- Redux Toolkit
- Vite
- JavaScript
- HTML
- CSS

## Packages Used

Quick Draw Trivia was created with the following packages:

- Axios
- React Bootstrap
- React Load Spinner

## Approach Taken

The initial approach taken on Quick Draw Trivia was as follows:

**Research:** I browsed online for similar types of trivia games available on the web to draw inspiration for design, feel and functionality of the application.

**Wireframe:** Once research was complete, I created a simple wireframe to outline how the application would look and feel once the components were implemented. Some of these features didn't make it to the production build but may be added in the future.

**Redux Implementation:** The first step was to initialize a Redux container with the Redux Toolkit. Once the slices and store were setup, I slowly added to them as the needs of the application grew. This prevented having to implement the Redux store later on, preventing headache and issues.

**React Component Implementation:** After the Redux store was setup, I started building out/adding components for the game's menu, setting's menu as well as creating the cluster component that renders the trivia question as well as the correct/incorrect answers to the relative question in a randomized order (to prevent the correct answer always populating the same button). 

**Styling:** One the React components were built, I started working on custom styling to build upon the existing pre-defined styling of the bootstrap components I based mine off of. This was the last step taken, as time restraints were an issue, and it was better to implement as many features as I could before focusing on style.

## Bugs/Known Issues

**Known Issue 1:**
`Warning: Each child in a list should have a unique "key" prop.`<br />
*Description*: Children components are using a unqiue 'key' prop.<br />
*Solution*: As I work on optimization/reworking some of the systems, this warning should resolve.

**Known Issue 2:**
`Warning: Cannot update a component ('App') while rendering a different component`<br />
*Description:* This is due to using state to update the game screens. This was a quick workaround due to time restraints and issues with the React Router component.<br />
*Solution:* This will be corrected when I update the app to route each page of the game window using the React Router component. 

**Bug 1:**
Game Cluster Buttons randomize values upon onClick event to incorrect values.<br />
*Description:*  This is being caused by the Randomise function being called multiple times. This does not break the application, rather causes a cosmetic issue at the moment.<br />
*Solution:* I plan to isolate the issue upon further testing and remove the bug to provide a better user experience.<br /> 

**Bug 2:**
Game Cluster Buttons sometimes don't all change colors, leaving one as the default styling.<br />
*Description:*  Currently unknown as to why this is happening, and it cannot be replicated everytime. Most of the time it renders all buttons in the cluster the correct color, few instances during testing have shown otherwise.<br />
*Solution:* Direction unknown at this moment. Further investigation into the issue or a possible rework of the component will render this issue irrelevant. 

## Todo List

The following are things I am going to work on for the next update:

- Add SASS to change bootstrap themes/colors
- Add Routers to properly navigate single page application.
- Fix Randomize function to prevent shuffling of answers on answer selection. 
- Change UI to make site better looking.
- Change UI to make site optimaized for dynamic viewing.
- Reimplement timer component.
- Change scoring component to reflect different values as timer component is reduced  (higer value === higher score).
- Add additional pages to Navbar including how-to-play, about, etc.

## Plugin Information:

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
