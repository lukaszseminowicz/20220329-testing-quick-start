import users from './users.json';
// Users from: https://jsonplaceholder.typicode.com/users

export class UserService {
  users = [];
  userLength = 10;

  loadUsers() {
    this.users = users;
    this.userLength = this.users.length;
  }

  getAllUsers() {
    return this.users;
  }

  getAllNames() {
    return this.users.map(u => u.name);
  }
}
