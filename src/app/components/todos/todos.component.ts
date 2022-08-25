import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/dataservice.service';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  TodosList:Todo[]=[];

  constructor(private service:DataserviceService) {
    service.getTodos().subscribe(res=>{
      this.TodosList=res;
    })
   }

   getTodo(userId:string){
    this.service.getTodo(userId).subscribe(res=>{
      this.TodosList=res;
    })
   }

  ngOnInit(): void {
  }

}
