import { IPerson } from "./IPerson";
import {Guid} from "guid-typescript";

export class Student implements IPerson {

	constructor(public firstName: string, public lastName: string, public email: string) {
	}
    
}