import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: 'experience',
    loadChildren: () => import('./components/experience/experience.module').then(m => m.ExperienceModule)
  },
  {
    path: 'education',
    loadChildren: () => import('./components/education/education.module').then(m => m.EducationModule)
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./components/projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('./components/skills/skills.module').then(m => m.SkillsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
