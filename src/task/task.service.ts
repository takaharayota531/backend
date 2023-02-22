import { Injectable } from '@nestjs/common';
import { CreateTaskInput } from './dto/createTask.input';
import { Task } from './models/task.model';

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  //   get task array
  getTasks(): Task[] {
    return this.tasks;
  }

  // create task element
  // createTask(name: string, dueDate: string, description?: string): Task {
  //   const newTask = new Task();
  //   newTask.id = this.tasks.length + 1;
  //   newTask.name = name;
  //   newTask.dueDate = dueDate;
  //   newTask.status = 'NOT_STARTED';
  //   newTask.description = description;

  //   this.tasks.push(newTask);
  //   return newTask;
  // }
  createTask(createTaskInput: CreateTaskInput): Task {
    const { name, dueDate, description } = createTaskInput;
    const newTask = new Task();
    newTask.id = this.tasks.length + 1;
    newTask.name = name;
    newTask.dueDate = dueDate;
    newTask.status = 'NOT_STARTED';
    newTask.description = description;

    this.tasks.push(newTask);
    return newTask;
  }
}
