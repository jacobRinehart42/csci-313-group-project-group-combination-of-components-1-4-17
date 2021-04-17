import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  loggedIn() {
    return localStorage.getItem("token");
  }
  onSignout() {
    localStorage.removeItem("token");
  }
}

// const navSlide = () => {
//   const burger = document.querySelector(".burger");
//   const nav = document.querySelector(".nav-links");

//   burger.addEventListener("click", () => {
//     nav.classList.toggle("nav-active");
//   });
// };

// navSlide();
