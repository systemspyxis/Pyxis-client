import { Component, AfterViewInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces:true
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    $(function () {
      $("#menu").on("click", function () {
        $(this).toggleClass("active");
        $("body").toggleClass("nav-open");
      });
    });
  }
  title = 'pyxis-client';
}
