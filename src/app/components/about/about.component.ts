import { Component, OnInit } from '@angular/core';
import { Jobs } from '../../data/jobs';
import Job from '../models/job';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  jobs: Job[];
  constructor() { }

  ngOnInit() {
    this.jobs = Jobs.data;
  }

}
