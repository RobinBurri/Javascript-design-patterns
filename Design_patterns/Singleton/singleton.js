/**
 * Singletons are classes which can be instantiated once, and can be accessed globally. This single instance can be shared throughout our application, which makes Singletons great for managing global state in an application.
 * However, Singletons are actually considered an anti-pattern, and can (or.. should) be avoided in JavaScript.
 */

/**
 * Let’s make sure that only one instance of the Counter class can be created.
 *  In the constructor of Counter, we can set instance equal to a reference to the instance when a new instance is created. We can prevent new instantiations by checking if the instance variable already had a value.
 */
let instance
let counter = 0

class Counter {
    constructor() {
        if (instance) {
            throw new Error('You can only create one instance of Counter')
        }
        instance = this
    }
    getInstance() {
        return this
    }

    getCount() {
        return counter
    }

    increment() {
        return ++counter
    }

    decrement() {
        return --counter
    }
}

/**
 * The Object.freeze method makes sure that consuming code cannot modify the Singleton. Properties on the frozen instance cannot be added or modified, which reduces the risk of accidentally overwriting the values on the Singleton.
 */

const singletonCounter = Object.freeze(new Counter())
export default singletonCounter

/**
 * Using a regular object
 */

/**
 let count = 0;

const counter = {
  increment() {
    return ++count;
  },
  decrement() {
    return --count;
  }
};

Object.freeze(counter);
export { counter };
 */
