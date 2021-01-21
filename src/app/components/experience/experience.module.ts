import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExperienceComponent } from './experience.component';
import { ExperienceRoutingModule } from './experience-routing.module';


@NgModule({
    declarations: [
        ExperienceComponent
    ],
    imports: [
        CommonModule,
        ExperienceRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class ExperienceModule { }
