import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from '../api/models/todo-item';
import { TodoItemsService } from '../api/services';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class TodoComponent implements OnInit {

  dataSource!: Observable<TodoItem[]>;
  columnsToDisplay = ['id', 'description', 'priority', 'done'];
  expandedElement!: TodoItem | null;

  constructor(private todoItemsService: TodoItemsService) { }

  ngOnInit(): void {
    this.dataSource = this.todoItemsService.apiTodoItemsGet$Json();
  }

}
