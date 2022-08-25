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
//! GET
   getTodo(userId:string){
    this.service.getTodo(userId).subscribe(res=>{
      this.TodosList=res;
    })
   }

//! POST
addTodo(){
  let newTodo:Todo={id:0, userId:10, title:'new todo', completed:true}
  this.service.addTodo(newTodo).subscribe(res=>{
    newTodo.id=res['id'];
    this.TodosList.splice(0,0,newTodo)
  })
}

  ngOnInit(): void {
  }

}
