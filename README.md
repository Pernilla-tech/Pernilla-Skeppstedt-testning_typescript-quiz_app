# How to Play

## Open the app

- Enter your playername. This is not optional.
- Select difficulty and region. This is optional.
- Click at the "Start quiz" button
- Pick a category. After that the quiz will start in 3 seconds.
- A 30 sec countdown will start.
- Answer the question within 30 sec. 
- After each question you will pick a new category.
- When all nine questions are answered the total score will show. 

## Design principes

I have split up my code, so its easy to find components, enums, utils, interfaces, context etc.
For example I have the API integration in one place, i have components in one folder, and every component has its own folder there the test, and styling who belongs to the component also is placed.

I used styled components for styling the components, because I think its easy to work with and the codes get cleaner without a lot of classnames.

## Testning

Strategy: Tried to cover the requirements of the assignement. 

For the BDD test I used Cypress because i never used it before and wanted to try it out and learn more about it. The BDD test describes "One round of a quiz game".

For the components and functions I wanted to test I used unit test to test for example a button or to see if a component is working an render as expected. 

I used mock test for the API to test its request and response. 


## Diagrams

The sequence and class diagram can be find in the "docs" folder. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
