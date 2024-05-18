/**
 * Calculate the result of a formula.
 *
 * @param formula A string containing integers and the operators + and -.
 */
const calculate = (formula: string): number => {
    // Ensure that the formula starts with a +.
    if (/^\d/.test(formula)) {
        formula = '+' + formula;
    }

    if (!/^([+-]\d+)+$/.test(formula)) {
        throw new Error('Invalid formula');
    }

    const numbers = formula.split(/(?=[+-]\d+)/).map(Number);

    return numbers.reduce((acc, num) => acc + num, 0);
}

const isFormulaEven = (formula: string): boolean => calculate(formula) % 2 === 0;

try {
    // Read formula from cli argument.
    if (!(2 in process.argv)) {
        throw new Error('Please provide a formula');
    }

    const formula = process.argv[2];

    console.log(`Is the value of the formula even? ${isFormulaEven(formula)}`);
} catch (error) {
    console.error(error);
    process.exit(1);
}