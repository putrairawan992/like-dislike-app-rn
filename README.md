## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```


### Question

1. Why did you choose React-Native?
```
Advantages of Using React Native:
Cross-Platform Development: One of the most significant advantages is the ability to write most of your code once and run it on both Android and iOS. This can reduce both development time and cost.

Community and Ecosystem: Being an open-source project, React Native has a large and active community of developers. This ensures a plethora of third-party libraries and tools, making it easier to add functionality to your apps.

Faster Development: React Native enables hot-reloading, meaning you can immediately see the result of the latest changes. This significantly speeds up the development process.

Native Modules: While React Native does a great job with most use cases using just JavaScript, it also offers a way to write native modules in languages like Swift, Objective-C, or Java for tasks that require higher performance, like image editing or video processing.

Strong Corporate Backing: React Native was developed and is maintained by Facebook, providing assurance that the framework is well-supported and not likely to be abandoned in the near future.

JavaScript: Using JavaScript for mobile development can be advantageous for companies that already use JS for their web applications, as it can make it easier to maintain a consistent tech stack and share code between web and mobile apps.

UI-Focused: React Native is very focused on the user interface. It gives you a highly responsive interface thanks to asynchronous JS interactions with the native environment, leading to smoother animations and transitions.

Over-the-Air Updates: Traditional native apps need to go through the app store update cycle to push updates. React Native allows you to bypass this using Over-the-Air (OTA) updates, which can be quicker and less cumbersome for the user.

Reuse of Skills and Code: If your team is already proficient in React for web development, learning React Native typically has a gentler learning curve compared to learning an entirely new platform/language.

Disadvantages:
Performance: While React Native can handle most types of apps, it's not as performance-optimized as native apps for CPU-intensive tasks.

Native Modules: For some specific functionalities, you might still need to write platform-specific code, which could add complexity.

Maturity: Although it has matured significantly, React Native is not as mature as native platform languages like Swift for iOS and Java/Kotlin for Android.

Given these pros and cons, the decision to use React Native will depend on various factors, including your project requirements, team expertise, and long-term maintenance considerations.
```
2. From 1 - 10 how's your confident about your react-native development?
```
8.5
```
3. How many lifecycles did you know in react-native? please explain!
```
Here's a breakdown for Class components:

Mounting Phase:
constructor(props): Called before the component is mounted. Initialize state and bind methods here.
static getDerivedStateFromProps(props, state): Called before render() and on every update. Returns an object to update state or null to not update.
render(): Returns the JSX that should be rendered.
componentDidMount(): Called immediately after a component is added to the DOM. Good for API calls.
Updating Phase:
static getDerivedStateFromProps(props, state): Same as in mounting.
shouldComponentUpdate(nextProps, nextState): Determines if the component should re-render.
render(): Returns the updated JSX.
getSnapshotBeforeUpdate(prevProps, prevState): Called right before the changes from the virtual DOM are to be reflected in the DOM.
componentDidUpdate(prevProps, prevState, snapshot): Called immediately after updating. Good for DOM operations.
Unmounting Phase:
componentWillUnmount(): Called immediately before a component is destroyed. Perform cleanup tasks here.
Error Handling:
static getDerivedStateFromError(error): Called during the "render" phase. Use to render a fallback UI after an error.
componentDidCatch(error, info): Called during the "commit" phase. Use to log error information.
React Function Components and Hooks:
useState: Replaces this.state and this.setState for local state management.
useEffect: Combines componentDidMount, componentDidUpdate, and componentWillUnmount for side effects.
useContext: Replaces contextType and Context.Consumer for context consumption.
Other Hooks: useReducer, useCallback, useMemo, useRef, etc., offer additional functionality.
With Hooks, function components can now do everything class components can do and more, which is why Hooks are now the future of React. Nevertheless, lifecycle methods in class components are still entirely valid and you'll likely encounter them in many existing projects.

```
4. What is different between Component compare to PureComponent And ScrollView compare to Flatlist?
```
Component and PureComponent are part of React and React Native and are used for creating class-based components. Here are the key differences:

Should Component Update:

Component does not implement shouldComponentUpdate(), meaning the component will re-render by default whenever setState is called or its parent re-renders.
PureComponent implements shouldComponentUpdate() with shallow props and state comparison. It only re-renders if there's a shallow difference in state or props, improving performance for some types of updates.
Use Case:

Use Component when you need full control over the component lifecycle, including shouldComponentUpdate.
Use PureComponent when your component's render output is determined by shallow comparison of its props and state.
Customization:

With Component, you can implement your own shouldComponentUpdate logic.
With PureComponent, you're opting into the shallow comparison logic and you shouldn't implement shouldComponentUpdate.
Caveats:

Using PureComponent with complex data structures like nested objects or arrays might lead to unexpected behavior because it uses shallow comparison.
ScrollView vs. FlatList
Both ScrollView and FlatList are used for displaying lists of items, but they are optimized for different scenarios:

Performance:

ScrollView renders all its react components at once, which could affect performance for long lists.
FlatList only renders items that fit on the screen and recycles them, improving memory usage and performance.
Lazy Loading:

ScrollView does not support lazy loading.
FlatList supports lazy loading out of the box.
Header/Footer:

ScrollView does not natively support headers or footers.
FlatList has built-in support for header and footer components.
Scroll Events:

ScrollView provides basic scroll events.
FlatList provides more control with features like onEndReached for infinite scrolling.
Item Layouts:

ScrollView is more flexible when it comes to item layout.
FlatList assumes a vertical layout by default, although it does support horizontal layouts.
Item Keys:

In ScrollView, you manage keys manually for each item.
FlatList requires that each item data object supply a unique key (or you can provide a keyExtractor function).
Use Case:

Use ScrollView for small lists where the layout is simple or when you need more control over the items' arrangement.
Use FlatList for long lists, especially when performance is a concern.
Choose between Component and PureComponent based on your needs for lifecycle control and performance. Likewise, the choice between ScrollView and FlatList will depend on your specific requirements regarding layout and performance.
```
5. Do you know what is a functional component and class component? please explain!
```
Functional Component:
Functional components are simpler and easier to write. They are just JavaScript functions that return JSX. Functional components don't have lifecycle methods (like componentDidMount, componentDidUpdate, etc.), but you can replicate these using React Hooks (useEffect, useState, etc.).
Class Component:
Class components are more verbose but offer more features out of the box, like lifecycle methods and a render method that returns JSX. They are defined as ES6 classes inheriting from React.Component.

Comparison:
Verbosity: Class components are more verbose compared to functional components.
Performance: Functional components are generally considered faster and lighter than class components, although the differences are often negligible for most real-world apps.
Hooks: React Hooks make it easier to use features like state and lifecycle methods in functional components, which were previously only possible in class components.
Best Practices: As of React 16.8+, the community and the React team are leaning towards functional components and Hooks for new codebases.
Both functional and class components have their uses, but functional components are becoming increasingly popular due to the introduction of React Hooks.

```

6. Do you know redux? did you use it? please explain! if you used other liblary please explain!
```
What is Redux?
Redux is a predictable state container for JavaScript apps. It helps you manage the state of your application in a predictable way by enforcing certain constraints on how and when updates can happen. Redux is commonly used with React, but it can be used with any view library.

Core Concepts:
Action: Plain JavaScript objects that describe what happened in the application. Actions must have a type property to indicate the type of action being performed.
Reducer: Functions that specify how the application's state changes in response to an action.
Store: Holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.
Dispatch: A function that accepts an action and sends it to the reducer to modify the state.

Why Use Redux?
Predictable: Redux helps you make applications that behave consistently and are easier to test.
Debuggable: Redux offers powerful tools for debugging your application.
Flexibility: While Redux is often used with React, it is view-layer agnostic and can be used with any UI library.
Alternatives to Redux
MobX: Uses observables to efficiently propagate changes through your application.
Context API + Hooks: React's built-in state management using the Context API and various Hooks (useState, useReducer, etc.).
Apollo Client: For GraphQL-based applications, Apollo Client can manage both local and remote data.
Zustand, Recoil, Valtio: Smaller, more experimental libraries that aim for simpler APIs and better performance.

```

7. Is there any framework/library/package that you usually used in your project? please list!
```State Management:
Redux: For managing application-wide state.
MobX: Another state management library, which uses observables.
React Query: For server state management including caching, synchronization, and fetching.
Zustand: A smaller, simpler state management library.
Recoil: A new state management library from Facebook.
Navigation:
React Navigation: A popular navigation library.
React Native Navigation: Offers native navigation capabilities.
UI Libraries:
React Native Elements: A collection of easy-to-use, customizable UI components.
NativeBase: UI components that have a native look and feel.
React Native Paper: Material Design components for React Native.
Styling:
Styled-components: Styled-components library for React Native.
Restyle: Type-enforced system for building UI.
Tailwind CSS: If you're a fan of Tailwind, you can use libraries like restyled to bring Tailwind into React Native.
Forms:
Formik: Makes forms in React Native simpler.
React Hook Form: Leverage React hooks to simplify form validation.
Networking:
Axios: For making HTTP requests.
Apollo Client: If you're working with GraphQL.
Utility Libraries:
Lodash: General utility functions.
Moment.js or Day.js: For date manipulation and formatting.
Testing:
Jest: For general purpose testing.
Testing Library: Utilities to test React components.
Detox: End-to-end testing.
Animation:
React Native Reanimated: Provides a more comprehensive and low-level abstraction for the Animated library.
Lottie: For implementing animations from After Effects.
Persistence:
Async Storage: For simple key-value storage.
Realm: A mobile database that runs directly inside phones.
SQLite: If you need a more relational data design.
```
8. Do you know "Ignite boilerplate"? did you use that?
```
Key Features:
Code Generation: Ignite allows you to generate components, screens, and even Redux-related code with simple CLI commands.

Component Library: Ignite comes with a set of pre-built components that are commonly used in mobile app development. This speeds up development considerably.

State Management: Ignite often includes some kind of state management setup out-of-the-box, often using Redux or MobX.

Navigation: A pre-configured navigation setup is usually included, often using libraries like React Navigation.

Best Practices: The boilerplate follows best practices for folder structure, code organization, and performance optimizations.

Utilities: Useful utilities for things like API service calls, data persistence, and more are often included.

Documentation: Ignite boilerplates usually come with comprehensive documentation to help teams understand the architecture and make contributions more seamlessly.

Community and Plugins: Because of its popularity, Ignite has a vibrant community and ecosystem. You can extend your setup with various plugins and even create your own.
```
9. Do you have any experience in Native Module / Native Bridge (Implement Native Android / IOS code to Javascript/React Native)? Yes experience



### Bonus
1. what is different between “if (variable == 1)” and “if(variable === 1)” ? 

Question: 

== (Double Equals)
The == operator performs type coercion if the types of the two variables being compared are different. This means that before comparing the values, JavaScript will attempt to convert them to a common type.

=== (Triple Equals)
The === operator performs a strict equality check. This means it will not perform any type coercion, so the types have to be the same for the values to be considered equal.


2. what is different between common function  and arrow function?
  a. common function:
  functionName() {
    // write some code here
  }

  b. arrow function:
  functionName = () => {
    // write some code here
  }

Question:   

Understanding the differences between regular and arrow functions helps choose the right syntax for specific needs.

this value inside a regular function is dynamic and depends on the invocation. But this inside the arrow function is bound lexically and equals to this of the outer function.

arguments object inside the regular functions contains the arguments in an array-like object. The arrow function, on the opposite, doesn't define arguments (but you can easily access the arrow function arguments using a rest parameter ...args).

If the arrow function has one expression, then the expression is returned implicitly, even without using the return keyword.

Last but not least, you can define methods using the arrow function syntax inside classes. Fat arrow methods bind this value to the class instance.

Anyhow the fat arrow method is invoked, this always equals the class instance, which is useful when the methods are used as callbacks.

3. what is different between:
  a. let array = oldArray
  b. let array = […oldArray]

Question:   

let array = oldArray makes array a reference to oldArray. Both refer to the same underlying array.
let array = [...oldArray] makes array a separate copy of oldArray, but it is a shallow copy.
Using let array = [...oldArray] is often used to ensure that you are working with a new copy of an array, to prevent unintended side-effects on the original array.

4. create a function that simulates API request using your own approach!

```   
function fakeApiRequest(endpoint) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (endpoint === 'users') {
        resolve([
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Bob' },
          { id: 3, name: 'Charlie' },
        ]);
      } else if (endpoint === 'posts') {
        resolve([
          { id: 1, title: 'Post 1', content: 'Content 1' },
          { id: 2, title: 'Post 2', content: 'Content 2' },
          { id: 3, title: 'Post 3', content: 'Content 3' },
        ]);
      } else {
        reject(new Error('Unknown endpoint'));
      }
    }, 1000); // Simulated delay of 1 second
  });
}

// Example usage:
fakeApiRequest('users')
  .then(data => console.log('Users:', data))
  .catch(error => console.log('Error:', error));

fakeApiRequest('posts')
  .then(data => console.log('Posts:', data))
  .catch(error => console.log('Error:', error));

fakeApiRequest('unknown')
  .then(data => console.log('Unknown:', data))
  .catch(error => console.log('Error:', error));
```
