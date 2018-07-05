
## SummerCodeTeaching

# Exercise 1. 

Using typescript, write a function that given a number parameter, adds 1 to it and return the result.

# Exercise 2. 

Using minimal HTML and typescript, write a code that calls to the function from previows exercise and prints the result in the browser console.

# Exercise 3. 

Using minimal HTML and typescript, write the code of *a new function that support two parameters*, *first parameter must be mandatory* and of type 'number' and *second parameter must be an optional string* with the default value 'sumar'.

So by default this functions take the first parameter and in case that no second parameter has passed, then adds ('sumar') 1 to the number represented by first one.

On the other hand, if second parameter has passed to the function, it only must be one of these values: "sumar" or "restar". If not our function not do anything, and only return the number passed on first parameter without any changes.

If the second parameter has the value "restar", then the function has to substract 1 to the number represented by first parameter.

To complete the exercise prints 3 times in the browser console:

* Prints the result of call the function only with first parameter in this format:

`
Call for number 'HERE THE VALUE PASSED' and no optional, result: 'HERE PUT THE RESULT'
`

* Prints the result of call the function with second parameter equals to "sumar"

`
Call for number 'HERE THE VALUE PASSED' and optional 'sumar', result: 'HERE PUT THE RESULT'
`

* Prints the result of call the function with second parameter equals to "restar"

`
Call for number 'HERE THE VALUE PASSED' and optional 'restar', result: 'HERE PUT THE RESULT'
`

* Prints the result of call the function with second parameter equals to "noOpPosible"

`
Call for number 'HERE THE VALUE PASSED' and optional 'noOpPosible', result: 'HERE PUT THE RESULT'
`

# Bonus exercise.

Using the web to help us, using html, put in the html's body section a label with the text 'Current time:' followed by one more label, with the identifier 'label_1'. Then, write a typescript code that sets the label 'label_1' value to the current date and time. the result should be something like this:

```
Current time: 05/06/2018, 8:35:56 AM
```

HINT: 
To manage dates in typescript (so javascropt) you can use the object Date, example:

`
  var fecha:date = new Date(); 
  console.log(fecha.toLocaleString())
`

HINT: 
To get the value of a label by id, you can use the DoM (Document Object Model), example:
`
(<HTMLLabelElement>document.getElementById("label_1")).textContent ="SOMETHING";

`

HINT: 
To put a label with an Identifier in HTML, you can use this code:
`
<label>Time: </label><label id="label_1" />

`