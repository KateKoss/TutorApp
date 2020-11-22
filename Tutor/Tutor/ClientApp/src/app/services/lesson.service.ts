import { Injectable } from '@angular/core';
import { Lesson } from '../models/lesson';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Guid} from "guid-typescript";
//import { Student } from '../models/student';

@Injectable(
 //{ providedIn: 'root'}
    )
export class LessonService {

    private url: string = "/api/lessons";

    constructor(private http: HttpClient) {}

    getLessons(): Observable<Lesson> {
        return this.http.get(this.url);
        //let lessonInfo = new Lesson();
        //lessonInfo.isProceed = true;
        ////lessonInfo.student = new Student('Ololo', 'Olo', 'ololo@gmail.com');
        //return lessonInfo;
    }

    getLesson(id: Guid) {
        return this.http.get(this.url + '/' + id)
    }

    createLesson(lesson: Lesson) {
        return this.http.post(this.url, lesson);
    }

    updateLesson(lesson: Lesson) {
        return this.http.put(this.url, lesson);
    }

    deleteLesson(id: Guid) {
        return this.http.delete(this.url + '/' + id);
    }
}
