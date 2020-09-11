import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  baseUrl: string = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getInventory = (): any => {
    return this.http.get(`${this.baseUrl}/items`)
  }

  addProduct = (product): any => {
    return this.http.post(`${this.baseUrl}/items`, product);
  }

  deleteProduct = (id: number): any => {
    return this.http.delete(`${this.baseUrl}/items/${id}`)
  }


  updateProduct = (product: any) => {
    return this.http.put(`${this.baseUrl}/items/${product.id}`, product);
  }

}
