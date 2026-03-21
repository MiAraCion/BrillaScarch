import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../../shared/header/header"
import { Footer } from "../../shared/footer/footer"


@Component({
  selector: 'app-home-layout',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './home-layout.html',
  styleUrl: './home-layout.css',
})
export class HomeLayout {

}
