import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Itodo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnInit {

  // Todo Array
  todosArr: Array<Itodo> = [

    {
      id: 1,
      title: 'Learn Angular',
      description: 'Study Angular components and data binding',
      iscompleted: 'yes'
    },

    {
      id: 2,
      title: 'Practice TypeScript',
      description: 'Practice interfaces, classes and generics',
      iscompleted: 'yes'
    },

    {
      id: 3,
      title: 'Build Todo App',
      description: 'Create Todo CRUD using Angular',
      iscompleted: 'no'
    },

    {
      id: 4,
      title: 'Learn RxJS',
      description: 'Understand Observable and RxJS operators',
      iscompleted: 'no'
    },

    {
      id: 5,
      title: 'Prepare for Interview',
      description: 'Practice Angular and JavaScript interview questions',
      iscompleted: 'yes'
    }

  ];

  // Edit ke liye selected todo
  editTodoobj!: Itodo;

  constructor(
    private _SnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  // =========================
  // ADD TODO
  // =========================
  getNewTodos(todo: Itodo): void {

    this.todosArr.push(todo);

    this._SnackBar.open(
      'New Todo Added Successfully',
      'Close',
      {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      }
    );
  }

  // =========================
  // EDIT TODO
  // =========================
  getEditTodo(todo: Itodo): void {

    this.editTodoobj = todo;

  }

  // =========================
  // UPDATE TODO
  // =========================
  getUpdateTodo(todo: Itodo): void {

    // Find existing todo index
    let getIndex = this.todosArr.findIndex(
      t => t.id === todo.id
    );

    // Agar todo mil gaya
    if (getIndex > -1) {

      // Existing todo ko updated todo se replace karenge
      this.todosArr[getIndex] = todo;

    }

    this._SnackBar.open(
      'The Todo is updated Successfully...!!',
      'Close',
      {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      }
    );
  }

  // =========================
  // DELETE TODO
  // =========================
  getRemovedId(todo: Itodo): void {

    // Todo ka index find karenge
    let getIndex = this.todosArr.findIndex(
      t => t.id === todo.id
    );

    // Agar todo mil gaya
    if (getIndex > -1) {

      // Array se todo delete
      this.todosArr.splice(getIndex, 1);

    }

    this._SnackBar.open(
      'The Todo is deleted Successfully...!!',
      'Close',
      {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      }
    );
  }

}