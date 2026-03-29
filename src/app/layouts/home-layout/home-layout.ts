import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../../shared/header/header"
import {HeaderDesktop} from "../../shared/header-desktop/header-desktop"
import { Footer } from "../../shared/footer/footer"


@Component({
  selector: 'app-home-layout',
  imports: [Header, Footer, RouterOutlet, HeaderDesktop],
  templateUrl: './home-layout.html',
  styleUrl: './home-layout.css',
})
export class HomeLayout {

}
