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