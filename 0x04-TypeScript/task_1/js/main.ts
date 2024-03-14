interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allow any additional attribute
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}


function printTeacher(firstName: string, lastName: string): string {
     return `${firstName.charAt(0)}. ${lastName}`;
}

// Interface for the constructor of StudentClass
export interface IStudentClassConstructor {
    new (firstName: string, lastName: string): IStudentClass;
}

// Interface for the StudentClass
export interface IStudentClass {
    workOnHomework(): string;
    displayName(): string;
}

// Implementation of the StudentClass
export class StudentClass implements IStudentClass {
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this._firstName;
    }
}

// npm run start-dev & npm run build runs webpack

