import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule} from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver
    }),
    UsersModule,
    MongooseModule.forRoot(process.env.MONGO_DB_URL, {
      retryAttempts: 5,
      retryDelay: 15,
      minPoolSize: 2
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
