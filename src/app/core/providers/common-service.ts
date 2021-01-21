import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Skill } from './skill';
import { SKILLS } from './skills-mock';

@Injectable({
    providedIn: 'root',
})
export class CommonService {

    constructor() { }

    getSkills(): Observable<Skill[]> {
        return of(SKILLS);
    }
}
