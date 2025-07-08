import { Component, inject } from "@angular/core";

import { ButtonModule } from "primeng/button";
import { DataViewModule } from "primeng/dataview";
import { DialogModule } from 'primeng/dialog';
import { CardModule } from "primeng/card";

import { CartProductsService } from "app/cart-products/data-access/cart-products.service";
import { ProductItemComponent } from "app/products/ui/product-item/product-item.component";
import { Product } from "app/shared/models/product.model";

@Component({
  selector: "app-cart-products",
  templateUrl: "./cart-products.component.html",
  styleUrls: ["./cart-products.component.scss"],
  standalone: true,
  imports: [ButtonModule, CardModule, DialogModule, DataViewModule, ProductItemComponent],
})
export class CartProductsComponent {
  private readonly cartProductsService = inject(CartProductsService);

  readonly cartProducts = this.cartProductsService.cartProducts;
  visible = this.cartProductsService.cartModalVisible;

  closeModal() {
    this.cartProductsService.closeCartModal();
  }

  onDelete(product: Product) {
    this.cartProductsService.delete(product.id).subscribe();
  }
}
