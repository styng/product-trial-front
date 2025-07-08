import { Component, inject } from "@angular/core";

import { BadgeModule } from 'primeng/badge';

import { CartProductsService } from "app/cart-products/data-access/cart-products.service";

@Component({
  selector: "app-cart-menubar",
  templateUrl: "./cart-menubar.component.html",
  styleUrls: ["./cart-menubar.component.scss"],
  standalone: true,
  imports: [BadgeModule],
})
export class CartMenuBarComponent {
  private readonly cartProductsService = inject(CartProductsService);

  readonly cartProducts = this.cartProductsService.cartProducts;

  openPopup() {
    this.cartProductsService.openCartModal();
  }
}
