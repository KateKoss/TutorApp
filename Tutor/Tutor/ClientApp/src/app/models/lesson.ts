import { Period } from './period'
import { Student } from './student';
import { LessonSubject } from './lessonSubject';
import { Guid } from "guid-typescript";

export class Lesson {
    constructor(id : Guid, isProceed: boolean, name?: string) {}
    //proceedPeriod: Period;
    //student: Student;
    //subject: LessonSubject;
}