import { Component, OnInit } from '@angular/core';
import { LessonService } from '../../services/lesson.service';
import { Lesson } from 'src/app/models/lesson';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css'],
  providers: [LessonService]
})
export class LessonComponent implements OnInit {
  public lessons: Lesson[];
  constructor(private lessonService: LessonService) { }

  ngOnInit() {
    this.loadAllLessons();
  }

  loadAllLessons() {
    this.lessonService.getLessons()
        .subscribe((data :Lesson[]) => this.lessons = data);
  }
}
