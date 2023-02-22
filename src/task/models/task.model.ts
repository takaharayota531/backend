import { Field, Int, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class Task {
  @Field(() => Int)
  // @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  dueDate: string;

  @Field()
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';

  @Field({ nullable: true, description: 'taskの説明' })
  description: string;
}
