import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ButtonModule } from "primeng/button";
import { SplitterModule } from "primeng/splitter";
import { ToolbarModule } from "primeng/toolbar";

import { CartMenuBarComponent } from './shared/ui/cart-menubar/cart-menubar.component';
import { PanelMenuComponent } from "./shared/ui/panel-menu/panel-menu.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [ButtonModule, CartMenuBarComponent, RouterModule, SplitterModule, ToolbarModule, PanelMenuComponent],
})
export class AppComponent {
  title = "ALTEN SHOP";
}
