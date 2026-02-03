import { Component, output } from '@angular/core';

@Component({
  selector: 'app-order-component',
  imports: [],
  templateUrl: './order-component.html',
  styleUrl: './order-component.scss',
})
export class OrderComponent {

  orderByAgePressed = output();
  orderByNamePressed = output<boolean>();

  isAScending = true;
  

orderByAge() {
console.log("Order by Age clicked");
this.orderByAgePressed.emit();
}
orderByName() {
console.log("Order by Name clicked");
this.orderByNamePressed.emit(this.isAScending);

this.isAScending = !this.isAScending;
}
}
