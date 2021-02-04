import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Student} from "../models/student";
import {Guid} from "guid-typescript";
import {Observable} from "rxjs";

@Injectable()
export class StudentService {
    private url: string = "api/student";

    constructor(private http: HttpClient) {
    }

    getStudents() : Observable<Student[]>{
        return this.http.get<Student[]>(this.url);
    }

    getStudent(id : Guid) : Observable<Student> {
        return this.http.get<Student>(this.url + '/' + id);
    }
}