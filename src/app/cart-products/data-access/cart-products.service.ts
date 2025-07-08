import { Injectable, inject, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of, tap } from "rxjs";

import { Product } from "../../shared/models/product.model";

@Injectable({
    providedIn: "root"
}) export class CartProductsService {

    private readonly http = inject(HttpClient);
    private readonly path = "/api/carts";
    
    private readonly _cartProducts = signal<Product[]>([]);
    private readonly _cartModalVisible = signal<boolean>(false)

    public readonly cartProducts = this._cartProducts.asReadonly();
    public readonly cartModalVisible = this._cartModalVisible.asReadonly();

    public get(): Observable<Product[]> {
        return this.http.get<Product[]>(this.path).pipe(
            catchError((error) => {
                return of(<Product[]>[]);
            }),
            tap((products) => this._cartProducts.set(products)),
        );
    }

    public add(product: Product): Observable<boolean> {
        return this.http.post<boolean>(this.path, product).pipe(
            catchError(() => {
                return of(true);
            }),
            tap(() => this._cartProducts.update(products => [product, ...products])),
        );
    }

    public openCartModal() {
        this._cartModalVisible.set(true);
    }

    public closeCartModal() {
        this._cartModalVisible.set(false);
    }

    public delete(productId: number): Observable<boolean> {
        return this.http.delete<boolean>(`${this.path}/${productId}`).pipe(
            catchError(() => {
                return of(true);
            }),
            tap(() => this._cartProducts.update(products => products.filter(product => product.id !== productId))),
        );
    }
}