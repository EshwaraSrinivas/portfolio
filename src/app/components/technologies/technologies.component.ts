import { Component, OnInit } from '@angular/core';
import Technologies from '../models/technologies';
import {Techs} from '../../data/techs';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  techs: Technologies[];
  constructor() { }

  ngOnInit() {
    this.techs = Techs.data;
    console.log(this.techs);
  }

}
