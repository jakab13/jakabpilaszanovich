'use strict';

module.exports = bwsController;

bwsController.$inject = [];

function bwsController() {
    var self = this;

    self.result = {};
    self.integers = [0, 1, 2, 3, 4, 5];
    self.showCode = false;
    self.getMax = getMax;

    function getMax() {
        var input = angular.copy(self.integers);
        var integerInput = input.map(convertToInteger);
        var sortedInput = integerInput.sort(sortAbs);
        self.result = isPairOrSingle(sortedInput);
    }

    function convertToInteger(a) {
        return parseInt(a, 10);
    }

    function sortAbs(a, b) {
        return Math.abs(a) < Math.abs(b) ? 1: -1;
    }

    function isPairOrSingle(array, index, result) {
        var length = array.length;
        index = index || 1;

        // Define a local variable to save the results
        result = result || {"pairs": [], "singles": [], "value": 0};

        if (index < length) {

            var multiply = array[0] * array[index];
            var addition = array[0] + array[index];

            // Check if multiplication is smaller than addition
            if (multiply < addition) {

                return isPairOrSingle(array, index + 1, result);

            } else {
                // Save the pair in a local variable
                result.pairs.push([array[0], array[index]]);

                // Add the value to the final result
                result.value += multiply;

                // Delete elements from the array
                array.splice(index, 1);
                array.splice(0, 1);

                // Run the recursive function with the updated array
                return isPairOrSingle(array, 1, result);
            }

        } else if (length != 0) {

            // Save the element as a single
            result.singles.push(array[0]);

            // Add the value to the final result
            result.value += array[0];

            // Delete the element from the array
            array.splice(0, 1);

            // Run the recursive function with the updated array
            return isPairOrSingle(array, 1, result);

        } else {

            return result;

        }
    }
    
}