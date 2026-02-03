import { Component } from '@angular/core';
import { StudentService } from '../../services/student-service/student-service';
import { OrderComponent } from "../order-component/order-component";

@Component({
  selector: 'app-list-component',
  imports: [OrderComponent],
  templateUrl: './list-component.html',
  styleUrl: './list-component.scss',
})
export class ListComponent {

  constructor(public studentService: StudentService) {}
  orderByName(isAscending: boolean) {
    console.log("list-component: Order by Name clicked");
    console.log("isAscending: " + isAscending);
    this.studentService.orderStudentsByName(isAscending);
  }

  orderByAge() {
    console.log("list-component: Order by Age clicked");
    this.studentService.orderStudentsByAge();
  }
}

