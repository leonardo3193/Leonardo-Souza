
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // ou 'postgres', 'sqlite', etc.
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'crud123',
      database: 'crud-test',
      autoLoadEntities: true,
      synchronize: true, 
    }),
    UserModule,
  ],
})
export class AppModule {}
