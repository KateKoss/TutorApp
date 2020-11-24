var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
//import { Student } from '../models/student';
let LessonService = class LessonService {
    constructor(http) {
        this.http = http;
        this.url = "/api/lessons";
    }
    getLessons() {
        return this.http.get(this.url);
        //let lessonInfo = new Lesson();
        //lessonInfo.isProceed = true;
        ////lessonInfo.student = new Student('Ololo', 'Olo', 'ololo@gmail.com');
        //return lessonInfo;
    }
    getLesson(id) {
        return this.http.get(this.url + '/' + id);
    }
    createLesson(lesson) {
        return this.http.post(this.url, lesson);
    }
    updateLesson(lesson) {
        return this.http.put(this.url, lesson);
    }
    deleteLesson(id) {
        return this.http.delete(this.url + '/' + id);
    }
};
LessonService = __decorate([
    Injectable(
    //{ providedIn: 'root'}
    )
], LessonService);
export { LessonService };
//# sourceMappingURL=lesson.service.js.map