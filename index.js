import Sieve from "./lib/Sieve.js";
import Inquirer from "inquirer"

const questions = {
    getNumber: {
        name: "number",
        type: "number",
        message: "What number do you want to test?"
    }
}

const init = async () => {
    console.log("Welcome to the prime number sieve!")

    const number = (await Inquirer.prompt(questions.getNumber)).number

    console.log(new Sieve(number).compute().prime);
}

init()
