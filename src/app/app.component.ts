import {Component} from '@angular/core';
import {Task} from "./task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  taskName: string = "Sugerowane zadanie: zrób trening";
  editMode: boolean = false;

  taskDate: string = "";

  tasks: Task[] = [{
    name: 'nauka Angulara',
    deadline: '26.10.2021',
    done: false
  },
    {
      name: 'zrobić formę na lata',
      deadline: '23.06.2021',
      done: false
    },
    {
      name: 'wkręcić się w picie yerba mate',
      deadline: '25.102.2021',
      done: true
    }]

  title = "Lista zadań";

  getFooter(): string {
    return "© Lista zadań,All rights reserved.";
  }

  getDate(): Date {
    return new Date();
  }

  clearTask() {
    this.tasks = [];
  }


  createTask(): void {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false
    };
    this.tasks.push(task);
    this.taskName = "";
    this.taskDate = "";
    this.sortTask()
  }

  switchEditMode(): void {
    this.editMode = !this.editMode;
  }

  markTaskAsDone(task: Task): void {
    task.done = true;
    this.sortTask()
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(e => e !== task);
    this.sortTask()
  }

  private sortTask() {
    this.tasks = this.tasks.sort((a: Task, b: Task) =>
      a.done === b.done ? 0 : a.done ? 1 : 1)
  }
}
