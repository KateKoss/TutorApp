import { Injectable } from '@angular/core';
import { Lesson } from '../models/lesson';
//import { Student } from '../models/student';

@Injectable(
 //{ providedIn: 'root'}
    )
export class LessonService {

    //constructor() { }
    getLesson(): Lesson {
        let lessonInfo = new Lesson();
        lessonInfo.isProceed = true;
        //lessonInfo.student = new Student('Ololo', 'Olo', 'ololo@gmail.com');
        return lessonInfo;
    }
}
