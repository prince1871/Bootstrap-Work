// Leap Year Checker
function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } 
    else if (year % 100 === 0) {
        return false;
    } 
    else if (year % 4 === 0) {
        return true;
    } 
    else {
        return false;
    }
}



// Power Function

function power(base, exp) {
    // Base case: any number raised to the power of 0 is 1
    if (exp === 0) {
        return 1;
    }
    // If exponent is negative, convert to positive and divide 1 by the result
    else if (exp < 0) {
        return 1 / power(base, -exp);
    }
    // Recursive case: base^exp = base * base^(exp-1)
    else {
        return base * power(base, exp - 1);
    }
}

