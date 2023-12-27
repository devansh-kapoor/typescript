// main.ts
// forms.ts
interface Form {
    name: string;
    email: string;
    age: number;
}

class FormValidator {
    static validate(form: Form): Promise<void> {
        return new Promise((resolve, reject) => {
            // Simulating form validation
            if (form.name && form.email && form.age && form.age > 0) {
                resolve();
            } else {
                reject(new Error("Form validation failed. Please fill in all fields correctly."));
            }
        });
    }
}

class Loader {
    static async showLoader() {
        console.log("Loading...");
        // Simulate loading delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Loader finished.");
    }
}

namespace Logger {
    export function log(message: string) {
        console.log(message);
    }
}

// Using different data types
let userName: string = "John";
let userAge: number = 25;
let isActive: boolean = true;
let userArray: string[] = ["John", "Doe"];
let userTuple: [string, number] = ["John", 25];
let userFunction: (name: string) => void = (name) => console.log(`Hello, ${name}`);
enum Gender {
    Male,
    Female,
}
let userEnum: Gender = Gender.Male;
let userObject: { name: string; age: number } = { name: "John", age: 25 };
type UserAlias = { name: string; age: number };
let userAlias: UserAlias = { name: "John", age: 25 };
interface UserInterface {
    name: string;
    age: number;
}
let userInterface: UserInterface = { name: "John", age: 25 };
type UserUnion = string | number;
let userUnion: UserUnion = "John";

// Using generic class
class GenericClass<T> {
    private data: T;

    constructor(data: T) {
        this.data = data;
    }

    getData(): T {
        return this.data;
    }
}

let genericString = new GenericClass<string>("Hello");
let genericNumber = new GenericClass<number>(42);

Logger.log("Starting form submission...");

// Using async/await and Promises
async function submitForm() {
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const ageInput = document.getElementById("age") as HTMLInputElement;
    try {
        await Loader.showLoader();

        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            age: parseInt(ageInput.value, 10),
        };
        await FormValidator.validate(formData);
        Logger.log("Form submitted successfully.");
    } catch (error) {
        Logger.log(`Error: ${error}`);
    }
}

// submitForm();
