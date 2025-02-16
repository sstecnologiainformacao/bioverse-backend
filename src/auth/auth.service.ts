import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  private readonly users = [
    { username: 'user1', password: 'user', role: 'user' },
    { username: 'user2', password: 'user', role: 'user' },
    { username: 'user3', password: 'user', role: 'user' },
    { username: 'user4', password: 'user', role: 'user' },
    { username: 'user5', password: 'user', role: 'user' },
    { username: 'user6', password: 'user', role: 'user' },
    { username: 'user7', password: 'user', role: 'user' },
    { username: 'user8', password: 'user', role: 'user' },
    { username: 'user9', password: 'user', role: 'user' },
    { username: 'admin', password: 'admin', role: 'admin' },
  ];

  validateUser(username: string, password: string) {
    const user = this.users.find(
      (user) => user.username === username && user.password === password,
    );

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return { username: user.username, role: user.role };
  }
}
