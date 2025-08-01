// now we know how to create an array and add elements to it.
// let's explore some common array methods in JavaScript.
// Array methods in JavaScript
// Array methods are built-in functions that allow you to manipulate arrays in various ways.
// Here are some common array methods in JavaScript:
// 1. push() - Adds one or more elements to the end of an array and returns the new length of the array.

    // array.push() example
    const arr = [1, 2, 3];
    arr.push(4, 5); // adds 4 and 5 to the end of the array
    console.log(arr); // output: [1, 2, 3, 4, 5]

    return returnValue;

    // 2. pop() - removes the last element from an array and returns that element. this method changes the length of the  array.
    function popelement() {
        const arr = [1, 2, 3, 4, 5];
        const poppedelement = arr.pop(); // removes the last element (5) from the array
        console.log(poppedelement); // output:: 5
        console.log(arr); // output: [1, 2, 3, 4, 5]
        return poppedelement;
    }

    // 3. shift() - removes the first element from an array and returns that element. this method changes the length of the array.
    function shiftelement() {
        const arr = [1, 2, 3, 4, 5];
    }

    const shiftelement = arr.shift() // removes the first element (1) form the array
    console.log(shiftelement);// output: 1
    console.log(arr); // output: [2, 3, 4, 5]
    return shiftelement;

    // 4. unshift() - adds one or more elements to the beginning of an array and returns the new length of the array.
    function unshiftelement() {
        const arr = [1, 2, 3, 4, 5];
        const unshiftelement = arr.unshift(0); // adds 0 to the beginning of the array
        console.log(unshiftelement); // output: 6 (new length of the array)
        console.log(arr); // output: [0, 1, 2, 3, 4, 5]
        return unshiftelement;
    }
    // 5. concat() - merges two or more arrays and returns a new array without changing the existing arrays.
    function concatelement() {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        const concatelement = arr1.concat(arr2); // merges arr1 and arr2
        console.log(concatelement); // output: [1, 2, 3, 4, 5, 6]
        return concatelement;
    }
    // 6. slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
    function sliceelement() {
        const arr = [1, 2, 3, 4, 5];
        const sliceelement = arr. slice(1, 4); // returns elements from index 1 to index 3 (4 not included)
        console.log(sliceelement); // output: [2, 3, 4]
        return sliceelement;
    }
    // 7. splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
    function spliceelement() {
        const arr = [1, 2, 3, 4, 5];
        const spliceelement = arr.splice(1, 2, 6, 7); // removes 2 elements starting from index 1 and adds 6 and 7
        console.log(spliceelement); // output: [2, 3] (removed elements)
        console.log(arr); // output: [1, 6, 7, 4, 5] (new array after splice)
        return spliceelement;
    }

    //8. indexof() - returns the first index at which a given element can be found in the array, or -1 if it is not present.
    function indexofelement() {
        const arr = [1, 2, 3, 4, 5];
        const indexofelement = arr.indexOf(3); // finds the index of element 3
        console.log(indexofelement); // output: 2 (index of element 3)
        return indexofelement;
    }

    // 9. includes() - determines whether an array includes a certain element, returning true or false as appropriate.
    function includeelement() {
        const arr = [1, 2, 3, 4, 5];
        const includeelement = arr.includes(3); // checks if element 3 is present in the array
        console.log(includeelement); // output: true (element 3 is present)
        return includeelement;
    }

    // 10. foreach() - executes a provided function once for each array element.
    function foreachelement() {
        const arr = [1, 2, 3, 4, 5];
        arr.forEach((Element, index)); {
            console.log(`element at index ${index} is ${Element}`);
            // output: element at index 0 is 1
            // output: element at index 1 is 2
            // output: element at index 2 is 3
            // output: element at index 3 is 4
            // output: element at index 4 is 5
            return Element;
        }
    }

    // 11. map() - creates a new array populated with the results of calling a provided function on every element in the calling array.

    function mapelement() {
        const arr = [1, 2, 3, 4, 5];
        const mapelement = arr.map((element => {
            return element * 2; // multiplies each element by 2
            console.log(mapelement); // output: [2, 4, 6, 8, 10]
            return mapelement;
        }))
    }

    // 12. filter() - creates a new array with all elements that pass the test implemented by the provided function.

    function filterelement() {
        const arr = [1, 2, 3, 4, 5];
        const filterelement = arr.filter((element) => {
            return element > 2; // filters elements greater than 2
            console.log(filterelement); // output: [3, 4, 5]
            return filterelement;
        })
    }

    // 13. reduce() - executes a reducer function (that you provide) on each element of the array, resulting in a single output value.




    
    
    