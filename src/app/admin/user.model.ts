export class User{
  username?: string;
  password?: string;
  email?: string;
  matric_no?: string;

  constructor(username:string, password:string, email:string, matric_no:string){
    this.username = username;
    this.password = password;
    this.email = email;
    this.matric_no = matric_no;
  }
}
