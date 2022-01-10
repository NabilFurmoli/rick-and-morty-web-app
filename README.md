# Architechure
 I have modularized the root directory in three diferent modules: utils, shared, and characters. This architicher alows the app to be readible, maintanable and extendible. Imagine, in the future, if the app will support another page such as Todo items. Then I will create another module in this root directory and name it todos that would abstract and inlcude logics and UIs assocated to Todos, similar to Characters module. 

 ### Utils
 Inlcudes Source codes and libraries responsible for allowing to use third party APIs. 

 ### Shared
 Inlcudes Source codes and Reusable Components that will be used across the application.

### Characters
 Inlcudes Source codes and Components responsible to build User interfaces and logics associated to Rick and Morty Characters.

 # Error handling
 I have made sure to catch error and show an informative message in the assosiated components. For example, if fetching a location information of character fails.Using React conditions, I show a "No location details avaliable in the associated UI componet'. 

 Note: In a real project I would also use toast libary to show the specific error message. I am very sick and for the sake fo time, for now, I retreive the error message and log it in the console.

 # Testing
 I did manual testing at the moment, If I was not sick, I would have wrote automated test scripts using Jest and React-testing-library.

 # Third Party Libraries
 ### Axios
 ### Reactsrap

 # If I had time for improvements
 1. I would added a toust feature to show error messages or other informative messages.

 2. I would have improved pagination feature to not just show a prev and next buttun but a range of pages. This way it would be easy for user to visit an desired page. Instead of clicking next button multiple times to get to a desired page.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
