import { IPerson } from "./IPerson";

export class Student implements IPerson {

	constructor(public firstName: string, public lastName: string, public email: string) {
	}
    
}