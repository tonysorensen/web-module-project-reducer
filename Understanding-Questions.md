# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
The action addOne is dispatched with a payload of 1.
The reducer takes in the current state object with its values and the action type, in this case ADD. Using a spread operator, the ADD_ONE action will increment the value of total by one and return the modified copy of the state object.
* TotalDisplay shows the total plus 1.
