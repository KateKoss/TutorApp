import { Period } from './period'
import { Student } from './student';
import { LessonSubject } from './lessonSubject';
import { Guid } from "guid-typescript";

export class Lesson {
    private id: Guid;
    private isProceed: boolean;
    private name: string;
    constructor(id : Guid, isProceed: boolean, name?: string) {
        this.id = id;
        this.isProceed = isProceed;
        this.name = name;
    }
    //proceedPeriod: Period;
    //student: Student;
    //subject: LessonSubject;
}