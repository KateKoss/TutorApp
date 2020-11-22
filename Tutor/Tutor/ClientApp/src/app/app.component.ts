import {Component, OnInit} from '@angular/core';
import {LessonService} from "./services/lesson.service";
import {Lesson} from "./models/lesson";

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [LessonService]
})
export class AppComponent implements OnInit {
    lesson: Lesson;// = new Lesson();
    constructor(private lessonService: LessonService) {
    }
    name = '';

    ngOnInit() {

    }

    loadLessons() {
        this.lessonService.getLessons().subscribe((data:Lesson) => this.)
    }
}