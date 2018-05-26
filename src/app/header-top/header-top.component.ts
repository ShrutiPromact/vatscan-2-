import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {

  isOpen: boolean;
  subOption: boolean = false;

  ngOnInit() {
    
  }
  // toggle side menu
  toggleList(drawer: { toggle: Function }) {
    drawer.toggle();
    this.isOpen = !this.isOpen;    
  }
  // for side menu 
  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 889) {
      return true;
    } else {
      return false;
    }
  }
  isLargeScreenButton() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 1024) {
      return true;
    } else {
      return false;
    }
  }
  // submenu
  openSubmenu() {
    this.subOption = !this.subOption;
  }

}
