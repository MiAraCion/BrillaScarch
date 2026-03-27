import { Component } from '@angular/core';
import {ListProducts} from "../../components/list-products/list-products"

@Component({
  selector: 'app-homepage',
  imports: [ListProducts],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

}
