import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EducationComponent } from './education.component';
import { EducationRoutingModule } from './education-routing.module';


@NgModule({
    declarations: [
        EducationComponent
    ],
    imports: [
        CommonModule,
        EducationRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class EducationModule { }
