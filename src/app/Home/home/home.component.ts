import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuService } from 'src/app/System/Services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  preserveWhitespaces: true
})
export class HomeComponent implements OnInit {
  sideMenuItems: MenuItem[];
  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    this.sideMenuItems = this.menuService.getSideMenu()
  }

  myFunction(x) {
    x.classList.toggle("change");
    if (document.getElementById("mySidenav").style.width === "" || (document.getElementById("mySidenav").style.width === "0px")) {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    } else {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    }
  }
}
