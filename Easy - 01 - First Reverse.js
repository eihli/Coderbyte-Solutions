// Each step explained
function FirstReverse(str) {

    // First, we need to use .split to change the string into an array so it can be further manipulated.
    // Passing "" (an empty string) into the method splits the string at every character.
    str = str.split("");

    // Next, we use the reverse method to reverse the order of the elements in our newly formed array.
    // Note that .reverse only works on arrays (which is why we had to use .split).
    str = str.reverse();

    // Finally, we use the .join method to patch our array back together and return a string. 
    // Passing an empty string here means that nothing gets inserted between each array element.
    str = str.join("");

    // Make sure to return the string
    return str;

}

// Using best practices
function FirstReverse(str) {

    return str.split("").reverse().join("");

}
