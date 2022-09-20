// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat () {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name) {
    let moreCatsEnd = [...cats];
    moreCatsEnd.push(name);
    return moreCatsEnd;
}

function prependCat(name) {
    let moreCatsFirst = [...cats];
    moreCatsFirst.unshift(name);
    return moreCatsFirst
}

function removeLastCat () {
    let oneLessCat = [...cats];
    oneLessCat.pop();
    return oneLessCat;
}

function removeFirstCat () {
    let oneLessCatFront = [...cats];
    oneLessCatFront.shift();
    return  oneLessCatFront;
}