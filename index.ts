// 1. Basic types
let someStr: string = 'Max'
let someNum: number = 52
let isGood: boolean = true
let anyValue: any = 'assfad'
let oneOfThese: string | number = 32
let strArr: string[] = ["a", "b", "c"]
let numArr: Array<number> = [1, 2, 3]
// 2. Work with functions
function logInfo(name: string, age: number): void {
    console.log(`name: ${name}, age: ${age}`);
}
function calc(a: number, b: number): number {
    return a + b
}
function calcAny(a: number, b: number | string): number {
    if (typeof b === 'string') {
        return a + 10
    }
    return a + b
}
// 3. Work with classes
class User {
    constructor(private name: string, private age: number) {
        // arguments "name" and "age" will be added to obj automatically due to modifiers: private, public, protected

    }
    public value: number = 10
    protected str: string = 'prot'
    private secret: any = false
}
// 4. Interfaces and objects
interface Hello {
    phrase: string,
    sayHello: (name: string) => void
}
let obj: Hello = {
    phrase: 'Privet',
    sayHello(name: string): void {
        console.log(this.phrase, name);
        if (typeof name === 'number') {
            console.log('Here is a number');
        }
    }
}
obj.sayHello("Max")
// 5. Interfaces and classes
interface Rabbit {
    type: string,
    run: () => void
}
class Animal implements Rabbit {
    type: string
    run(): void {
        console.log(`${this.type} is running`)
    }
    constructor(type: string) {
        this.type = type
    }
}
// 6. Generic type concept
interface OneMoreUser {
    name: string,
    age: number,
    greating: () => string
}
const someArr: OneMoreUser[] = [
    { name: 'Vasya', age: 32, greating: () => 'hello!' },
    { name: 'Peter', age: 43, greating: () => 'hi!' },
    { name: 'John', age: 12, greating: () => 'privet!' }
]
const oneMoreArr: Array<OneMoreUser> = [
    { name: 'Vasya', age: 32, greating: () => 'hello!' },
    { name: 'Peter', age: 43, greating: () => 'hi!' },
    { name: 'John', age: 12, greating: () => 'privet!' }
]

// RESUME:
// 1.Basic type: string, number, boolean, Array
// 2.arr: type[] === arr: Array < type >
// 3.const value: string | number - is possible to write
// 4.In classes constructor can assign values automatically if modifier (public, protected, private) included:
// constructor(public name: string, public age: number)