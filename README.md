# Краткое пособие по TypeScript

#### _автор: Кудрин Максим, почта: maxim.kudrin@gmail.com_

## Установка

> ### Для установки глобально
>
> ```
> npm i -g typescript
> ```
>
> ### Для компиляции
>
> ```
> tsc <filename>
> ```

## Что такое TypeScript?

Это язык программирования со строгой типизацией данных.

## Структура MindCard

1. Базовые типы
2. Работа с функциями
3. Работа с классами
4. Интерфейсы и объекты
5. Интерфейсы и классы
6. Генерик типы

## Развернутые ответы

### 1. Базовые типы

> Пример указания типов

```
let anyValue:[string|number|boolean|Array<type>]
```

### 2. Работа с функциями

> Пример указания типов функции

```
function anyFunc(name: string): void {}
```

### 3. Работа с классами

> Упрощенное присваивание значений обьекту класса через конструктор, если есть модификатор `public, protected, private`

```
class AnyClass{
    constructor(public name:string){
        //Не надо писать this.name = name
    }
}
```

=

```
class AnyClass{
    name:string
    constructor(name:string){
        this.name=name}
}
```

### 4. Интерфейсы и объекты

```
interface Interface{
    name:string,
    age:number
}
const obj:Interface = {
    name: 'Max',
    age: 28
}
```

### 5. Интерфейсы и классы

> Ключевое слово `implements`

```
interface Interface{
    name:string,
    age:number,
    sayHello:()=>void
}
class User implements Interface{
    name = 'Max',
    age = 28,
    sayHello(){
        console.log('hello')
    }
}
```

### 6. Генерик типы

> Запись типов в массивах

```
interface Car{
    type:string
}
const Cars:Array<Car> = [
    {type:'легковой'},
    {type:'грузовой'}
]

//или

const Cars:Car[] = [
    {type:'легковой'},
    {type:'грузовой'}
]
```
