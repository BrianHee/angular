function add (x, y) {
    return x + y;
}

const add2 = function (x, y) {
    return x + y + 2;
}

const add3 = (x, y) => {
    return x + y + 4;
}

// console.log(add(1, 2));
// console.log(add2(1, 2));
// console.log(add3(1, 2));

// hoist();

// function hoist () {
//     console.log('Hoisted');
// }

const hoist = () => {
    console.log('Hoisted');
}

class Car {
    constructor (color, miles) {
        this.color = color;
        this.miles = miles;
    }

    paint(newPaint) {
        this.color = newPaint;
        console.log('New color is', this.color);
    }

    drive(distance) {
        this.miles += distance;
        console.log('New miles is', this.miles);
    }
}

const Toyota = new Car ('blue', 0);
// Toyota.paint('pink');
// Toyota.drive(15);

function Animal (type, legs) {
    this.type = type;
    // this.legs = legs;
}

Animal.prototype = {
    change: function (newType) {
        this.type = newType;
        console.log('New type is', this.type);
    },
    grow: function (num) {
        this.legs += num;
        console.log('New legs is', this.legs);
    },
    multiply: () => {
        console.log(legs);
        this.legs = this.legs * 2;
        console.log('New legs', this.legs);
    }
};

// const Bob = new Animal ('cat', 4);
// Bob.change('dog');
// Bob.grow(5);
// Bob.multiply();

// console.log('' == false);

// variables();

// function variables () {
//     console.log(i);
//     var i = 0;
// }

let prom = 21;

function newPromise () {
    return new Promise((resolve, reject) => {
        if (prom === false) {
            resolve({
                code: 201,
                message: 'failed'
            })
        } else if (prom === true) {
            resolve({
                code: 200,
                message: 'passed'
            })
        } else {
            reject('Rejected')
        }
    })
}

// newPromise().then((res) => {
//     console.log(res.code, res.message)
// }).catch((res) => {
//     console.log(res)
// })

const arr = [1, 2, 3, 4, 5];
const arr2 = [5, 2, 4, 3, 1, 10, 20];

// console.log(arr.map(ele => ele * 2));
// console.log(arr.reduce((acc, cur) => (acc + 2) + cur));
// console.log(arr2.sort((a,b) => b - a));

function varScope () {
    let i = 0;

    if (i == 0) {
        var scope = 'hello';
        const constant = 'yo';
    }

    console.log(scope);
}

// varScope();

//closures
function closure1 () {
    let i = 1;

    function closure2 () {
        console.log(i);
    }
    return closure2;
}
let closure3 = closure1();
// closure3();

let num = 33;
let num2 = '33';
// console.log(num.toString().split(''));
// console.log(parseInt(num2));

// console.log(Math.floor(13/2));

// console.log(num[1]);

let greeting = 'hello';

// console.log(greeting.substring(3));

console.log('hello'[1]);