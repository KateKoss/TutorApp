import { Injectable } from '@angular/core';
import { Lesson } from '../models/lesson';
import {HttpClient} from "@angular/common/http";
import {Guid} from "guid-typescript";
import {Observable} from "rxjs";

@Injectable()
export class LessonService {

    private url: string = "/api/lessons";

    constructor(private http: HttpClient) {}

    getLessons(): Observable<Lesson[]> {
        return this.http.get<Lesson[]>(this.url);
    }

    getLesson(id: Guid) : Observable<Lesson>{
        return this.http.get<Lesson>(this.url + '/' + id)
    }

    createLesson(lesson: Lesson) : Observable<Lesson>{
        return this.http.post<Lesson>(this.url, lesson);
    }

    updateLesson(lesson: Lesson) : Observable<Lesson> {
        return this.http.put<Lesson>(this.url, lesson);
    }

    deleteLesson(id: Guid) : Observable<Lesson> {
        return this.http.delete<Lesson>(this.url + '/' + id);
    }
}
