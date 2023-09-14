import { Location } from '@angular/common'
import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  toggleButton: boolean = false;
  sidebar: boolean = false;
  fadeSection: boolean = false;
  backBtnState: boolean = false;
  isheaderFix: boolean = false;

  routes: any = [
    { name: "Home", path: '/'},
    { name: "About", path: '/'},
    { name: "Finances", path: '/'},
    { name: "Insurance", path: '/'},
  ]

  constructor(
    private location: Location,
    @Inject(DOCUMENT) private document: Document
  ) {}

  // making header as colored and transparent onScroll position
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.document.body.scrollTop > 50 || this.document.documentElement.scrollTop > 50) {
      this.isheaderFix = true;
    } else {
      this.isheaderFix = false;
    }
  }

  toggleMenu() {
    // animating icon
    this.toggleButton = !this.toggleButton;

    // animating sidebar
    this.sidebar = !this.sidebar;

    // enabling fade section 
    this.fadeSection = !this.fadeSection;
  }

  back() {
    this.location.back();
  }

}
