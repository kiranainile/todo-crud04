
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';

import { Itodo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  isInEditMode: boolean = false;

  @ViewChild('title') Title!: ElementRef;
  @ViewChild('description') description!: ElementRef;
  @ViewChild('isCompleted') isCompleted!: ElementRef;

  @Input() getEditobj!: Itodo;

  @Output() emitNewTodo: EventEmitter<Itodo> =
    new EventEmitter<Itodo>();

  @Output() emitUpdateTodo: EventEmitter<Itodo> =
    new EventEmitter<Itodo>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

    console.log(changes);

    if (changes['getEditobj']?.currentValue) {

      this.isInEditMode = true;

      this.Title.nativeElement.value =
        this.getEditobj.title;

      this.description.nativeElement.value =
        this.getEditobj.description;

      this.isCompleted.nativeElement.value =
        this.getEditobj.iscompleted;
    }
  }

  ngOnInit(): void {
  }

  ontodoadd(): void {

    let NewTodo: Itodo = {

      id: Date.now(),

      title: this.Title.nativeElement.value,

      description: this.description.nativeElement.value,

      iscompleted: this.isCompleted.nativeElement.value
    };

    console.log(NewTodo);

    this.emitNewTodo.emit(NewTodo);

    this.Title.nativeElement.value = '';
    this.description.nativeElement.value = '';
    this.isCompleted.nativeElement.value = 'no';
  }

  onUpdateTodo(): void {

    let UpdateObj: Itodo = {

      id: this.getEditobj.id,

      title: this.Title.nativeElement.value,

      description: this.description.nativeElement.value,

      iscompleted: this.isCompleted.nativeElement.value
    };

    console.log(UpdateObj);

    this.emitUpdateTodo.emit(UpdateObj);

    this.Title.nativeElement.value = '';
    this.description.nativeElement.value = '';
    this.isCompleted.nativeElement.value = 'no';

    this.isInEditMode = false;
  }
}

