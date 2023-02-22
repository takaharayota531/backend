import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateTaskInput } from './dto/createTask.input';
import { Task } from './models/task.model';
import { TaskService } from './task.service';

@Resolver()
export class TaskResolver {
  // pass taskService to constructor
  constructor(private readonly taskService: TaskService) {}

  // write as the format of graphQl
  @Query(() => [Task], { nullable: 'items' })
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }
  @Mutation(() => Task)
  createTask(
    // @Args('name') name: string,
    // @Args('dueDate') dueDate: string,
    // @Args('description', { nullable: true }) description: string,

    @Args('createTaskInput') createTaskInput: CreateTaskInput,
  ): Task {
    // return this.taskService.createTask(name, dueDate, description);
    return this.taskService.createTask(createTaskInput);
  }
}
