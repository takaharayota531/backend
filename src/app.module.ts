import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    // TODO understand
    // forRoot apply to all pages
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // graphQL use?
      playground: true,
      // code first
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      cors: {
        origin: '*',
      },
    }),
    TaskModule,
  ],
})
export class AppModule {}
