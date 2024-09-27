const givenString = prompt("Enter a string to know if it's a palindrome").toLowerCase()

/* We turn the string into an array by using .split() method so we can reverse it by using .reverse() method,
after it we join it into a string again by using .join() and turn it to lowercase */
const reversedString = givenString.split("").reverse().join("")

// We join the given string by its spaces
const givenStringNoSpaces = givenString.split(" " ).join("")
// We join the reversed string by its spaces
const reversedStringNoSpaces = reversedString.split(" ").join("")

if (givenStringNoSpaces === reversedStringNoSpaces) {
    alert("The introduced string is a palindrome")
}else {
    alert("The introduced string isn't a palindrome")
}