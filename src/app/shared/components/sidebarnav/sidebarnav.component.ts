import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-sidebarnav',
  templateUrl: './sidebarnav.component.html',
  styleUrls: ['./sidebarnav.component.scss'],
})
export class SidebarnavComponent implements OnInit {
  navData = navbarData;

  constructor(private router: Router) {}

  ngOnInit(): void {
    document.body.style.overflow = 'auto';
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
