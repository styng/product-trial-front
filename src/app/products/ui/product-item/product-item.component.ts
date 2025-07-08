import { Component, input } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ImageModule } from "primeng/image";
import { RatingModule } from "primeng/rating";

import { Product } from "app/shared/models/product.model";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.scss"],
  standalone: true,
  imports: [
    ImageModule,
    FormsModule,
    RatingModule,
  ],
})
export class ProductItemComponent {
  product = input<Product>()
}
