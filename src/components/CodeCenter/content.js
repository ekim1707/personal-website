export default {
    problem: "20. Valid Parentheses (Easy)",
    descriptionLabel: "Description:",
    description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
    

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
    

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.`,
    solutionLabel: "Solution:",
    solution: `/**
    * @param {string} s
    * @return {boolean}
    */
   var isValid = function(s) {
       let flag = true;
       let openBrackets = ['(', '{', '['];
       let closeBrackets = [')', '}', ']'];
       let tempArray = [];
       for (let i = 0; i < s.length; i++) {
           // console.log(s[i]);
           // console.log("tempArray: " + tempArray);
           // console.log(closeBrackets.indexOf(s[i]));
           switch (true) {
               case s.length === 1:
                   flag = false;
                   break;
               case closeBrackets.includes(s[0]):
                   flag = false;
                   break;
               case openBrackets.includes(s[i]):
                   tempArray.push(s[i]);
                   break;
               case closeBrackets.includes(s[i]):
                   console.log(openBrackets[closeBrackets.indexOf(s[i])]);
                   if (tempArray[tempArray.length - 1] === openBrackets[closeBrackets.indexOf(s[i])]) {
                       tempArray.pop();
                   } else {
                       flag = false;
                   }
           }
           if (!flag) break;
       }
       return tempArray.length === 0 ? flag : false;
   };`,
   card: {
        title: "Thought Process",
        width: "400px",
        height: "400px",
        labelColor: "red",
        contentStyle: "ul",
        contentArray: [
            "1st bullet point goes here"
        ]
    }
};