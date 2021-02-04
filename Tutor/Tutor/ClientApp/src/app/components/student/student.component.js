var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { StudentService } from "../../services/student.service";
let StudentComponent = class StudentComponent {
    constructor(studentService) {
        this.studentService = studentService;
    }
    ngOnInit() {
        this.loadStudents();
    }
    loadStudents() {
        this.studentService.getStudents().subscribe((data) => this.students = data);
    }
};
StudentComponent = __decorate([
    Component({
        selector: 'student',
        templateUrl: './student.component.html',
        styleUrls: ['./student.component.css'],
        providers: [StudentService]
    })
], StudentComponent);
export { StudentComponent };
//# sourceMappingURL=student.component.js.map