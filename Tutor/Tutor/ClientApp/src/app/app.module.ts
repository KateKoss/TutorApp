import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {LessonComponent} from "./components/lesson/lesson.component";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing/app-routing.module";;
import { MenuComponent } from './components/menu/menu.component'
;
import { HomeComponent } from './components/home/home.component'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LessonComponent,
        MenuComponent,
        HomeComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }