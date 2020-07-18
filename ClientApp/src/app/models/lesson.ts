import { Period } from './period'
import { Student } from './student';
import { LessonSubject } from './lessonSubject';

export class Lesson {
    isProceed: boolean;
    proceedPeriod: Period;
    student: Student;
    subject: LessonSubject;
}