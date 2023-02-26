/**
 * With a Proxy object, we get more control over the interactions with certain objects. A proxy object can determine the behavior whenever we're interacting with the object, for example when we're getting a value, or setting a value.
 */

const person = {
    name: 'John Doe',
    age: 42,
    nationality: 'American',
}

//   const personProxy = new Proxy(person, {});

/**
 * The second argument of Proxy is an object that represents the handler. In the handler object, we can define specific behavior based on the type of interaction. Although there are many methods that you can add to the Proxy handler, the two most common ones are get and set.
 */
//   const personProxy = new Proxy(person, {
//     get: (obj, prop) => {
//       console.log(`The value of ${prop} is ${obj[prop]}`);
//     },
//     set: (obj, prop, value) => {
//       console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
//       obj[prop] = value;
//     }
//   });

/**
 * A proxy can be useful to add validation. A user shouldn't be able to change person's age to a string value, or give them an empty name. Or if the user is trying to access a property on the object that doesn't exist, we should let the user know.
 */
const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        if (!obj[prop]) {
            console.log(
                `Hmm.. this property doesn't seem to exist on the target object`
            )
        } else {
            console.log(`The value of ${prop} is ${obj[prop]}`)
        }
    },
    set: (obj, prop, value) => {
        if (prop === 'age' && typeof value !== 'number') {
            console.log(`Sorry, you can only pass numeric values for age.`)
        } else if (prop === 'name' && value.length < 2) {
            console.log(`You need to provide a valid name.`)
        } else {
            console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`)
            obj[prop] = value
        }
    },
})

/**
   * Reflect
JavaScript provides a built-in object called Reflect, which makes it easier for us to manipulate the target object when working with proxies.

Previously, we tried to modify and access properties on the target object within the proxy through directly getting or setting the values with bracket notation. Instead, we can use the Reflect object. The methods on the Reflect object have the same name as the methods on the handler object.
   */
const personProxyReflect = new Proxy(person, {
    get: (obj, prop) => {
        console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`)
    },
    set: (obj, prop, value) => {
        console.log(`Changed ${prop} from ${obj[prop]} to ${value}`)
        Reflect.set(obj, prop, value)
    },
})

personProxy.nonExistentProperty
personProxy.age = '44'
personProxy.name = ''
