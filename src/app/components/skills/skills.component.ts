import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from '../../core/providers/common-service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit, OnDestroy {
  skills: any;
  private subscription: Subscription;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.subscription = this.commonService.getSkills().subscribe(data => {
      this.skills = data;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
