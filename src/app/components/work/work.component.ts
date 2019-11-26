import { Component, OnInit } from '@angular/core';
import { Projects } from '../../data/projects';
import Project from '../models/project';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  projects: Project[];
  constructor() { }

  ngOnInit() {
    this.projects = Projects.data;
  }

}
