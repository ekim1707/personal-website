export const content = {
    descriptionLabel: "Description:",
    solutionLabel: "Solution:",
    cardLabel: "Discussion:",
    cardLabelColor: "black",
    cardContentStyle: "ul",
};

export const leetcodeContent = [
    {
        problem: "1710. Maximum Units on a Truck (Easy)",
        href: "maximum-units-on-a-truck",
        description: `
        Example 1:

        Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
        Output: 8
        Explanation: There are:
        - 1 box of the first type that contains 3 units.
        - 2 boxes of the second type that contain 2 units each.
        - 3 boxes of the third type that contain 1 unit each.
        You can take all the boxes of the first and second types, and one box of the third type.
        The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8.
        Example 2:

        Input: boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10
        Output: 91
            

        Constraints:

        1 <= boxTypes.length <= 1000
        1 <= numberOfBoxesi, numberOfUnitsPerBoxi <= 1000
        1 <= truckSize <= 106
        `,
        solution: `
        /**
         * @param {number[][]} boxTypes
         * @param {number} truckSize
         * @return {number}
         */
        var maximumUnits = function(boxTypes, truckSize) {
        /**
        * sort throught second indices of sub-array from greatest to least
        * subtract 1st indices from trucksize until trucksize = 0 and keep running sum as you go
        * if it goes under 0, then multiply the negative amount of boxes 
        */
            const sortedArray = boxTypes.sort((a, b) => b[1] - a[1]);
            let unitTotal = 0;
            let x;
            for (x = 0; x < sortedArray.length; x++) {
                truckSize = truckSize - sortedArray[x][0];
                unitTotal += (sortedArray[x][0] * sortedArray[x][1]);
                if (truckSize < 0) break;
            }
            return truckSize < 0 ? unitTotal += (truckSize * sortedArray[x][1]) : unitTotal;
            
        };
        `,
        cardContentArray: [
            { content: "Time Complexity: O(n log n) for the sort function, O(n) for the for loop, O(n) overall" }
        ]
    },
    {
        problem: "20. Valid Parentheses (Easy)",
        descriptionLabel: "Description:",
        description: `
        Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

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
        s consists of parentheses only '()[]{}'.
        `,
        solutionLabel: "Solution:",
        solution: `
        /**
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
        };
        `,
        cardContentArray: [
            { content: "Time Complexity: at worst, O(n^2) because of the switch statement inside of the for loop" }
        ]
    },
]