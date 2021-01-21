import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkillsComponent } from './skills.component';
import { SkillsRoutingModule } from './skills-routing.module';


@NgModule({
    declarations: [
        SkillsComponent
    ],
    imports: [
        CommonModule,
        SkillsRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class SkillsModule { }
