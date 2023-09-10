import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
@Injectable()
export class UserService {
  constructor(@InjectDataSource() private dataSource: DataSource) {}

  async register(username: any, password: any) {
    try {
      const sql = `INSERT INTO user (USERNAME, PASSWORD) VALUES ('${username}','${password}')`;
      const sqlRes = await this.dataSource.query(sql);
      return 'Success';
    } catch (error) {
      throw error;
    }
  }

  async login(username: any, password: any) {
    try {
      const sql = `SELECT username FROM user WHERE username = '${username}' AND password = '${password}'`;
      const sqlRes = await this.dataSource.query(sql);
      return {username: sqlRes[0].username};
    } catch (error) {
      throw error;
    }
  }
}
