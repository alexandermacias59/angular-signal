import { Injectable, signal } from '@angular/core';
import { Student } from '../../model/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  
  students = signal<Student[]>([]);

  constructor() {

    const pippo: Student = {
      name: "pippo",
      age: 20
    }
    

    const pluto: Student = {
      name: "pluto",
      age: 25
    }
  
    const paperino: Student = {
      name: "paperino",
      age: 30
    }


    const newStudents = [pippo, pluto, paperino];
    this.students.set(newStudents);
  }


  orderStudentsByAge() {
    this.students.update(oldStudents => {
      return oldStudents.slice().sort((a, b) => a.age - b.age);
    });
  }

  orderStudentsByName(isAscending: boolean) {
    if (isAscending) {
    this.students.update(oldStudents => {
      return oldStudents.slice().sort((a, b) => isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    });
  } else {
    this.students.update(oldStudents => {
      return oldStudents.slice().sort((a, b) => isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    });
  }
}
}
