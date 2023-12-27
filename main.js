"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class FormValidator {
    static validate(form) {
        return new Promise((resolve, reject) => {
            // Simulating form validation
            if (form.name && form.email && form.age && form.age > 0) {
                resolve();
            }
            else {
                reject(new Error("Form validation failed. Please fill in all fields correctly."));
            }
        });
    }
}
class Loader {
    static showLoader() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Loading...");
            // Simulate loading delay
            yield new Promise(resolve => setTimeout(resolve, 2000));
            console.log("Loader finished.");
        });
    }
}
var Logger;
(function (Logger) {
    function log(message) {
        console.log(message);
    }
    Logger.log = log;
})(Logger || (Logger = {}));
// Using different data types
let userName = "John";
let userAge = 25;
let isActive = true;
let userArray = ["John", "Doe"];
let userTuple = ["John", 25];
let userFunction = (name) => console.log(`Hello, ${name}`);
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
let userEnum = Gender.Male;
let userObject = { name: "John", age: 25 };
let userAlias = { name: "John", age: 25 };
let userInterface = { name: "John", age: 25 };
let userUnion = "John";
// Using generic class
class GenericClass {
    constructor(data) {
        this.data = data;
    }
    getData() {
        return this.data;
    }
}
let genericString = new GenericClass("Hello");
let genericNumber = new GenericClass(42);
Logger.log("Starting form submission...");
// Using async/await and Promises
function submitForm() {
    return __awaiter(this, void 0, void 0, function* () {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const ageInput = document.getElementById("age");
        try {
            yield Loader.showLoader();
            const formData = {
                name: nameInput.value,
                email: emailInput.value,
                age: parseInt(ageInput.value, 10),
            };
            yield FormValidator.validate(formData);
            Logger.log("Form submitted successfully.");
        }
        catch (error) {
            Logger.log(`Error: ${error}`);
        }
    });
}
// submitForm();
