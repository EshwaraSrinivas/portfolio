import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger(
      'portrait', [
        transition(':enter', [
          style({transform: 'translateY(100%)', opacity: 0}),
          animate('0.5s ease-in-out', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          animate('0.5s ease-in-out', style({transform: 'translateY(100%)', opacity: 0}))
        ])
      ]
    ),
    trigger(
      'navigation', [
        transition(':enter', [
          style({transform: 'translateY(-100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          animate('500ms', style({transform: 'translateY(-100%)', opacity: 0}))
        ])
      ]
    )
  ]
})
export class HeaderComponent implements OnInit {
  showMenu : Boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  showmenu() {
    this.showMenu = !this.showMenu;
  }

  navigate(url) {
    this.showMenu = false;
    this.router.navigateByUrl(url);
  }
}
