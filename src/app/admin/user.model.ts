export class User{
  username?: string;
  password?: string;
  email?: string;
  matric_no?: string;
  role?:string;

  constructor(username:string,
     password:string,
     email:string,
     matric_no:string,
     role:string){
    this.username = username;
    this.password = password;
    this.email = email;
    this.matric_no = matric_no;
    this.role = role;
  }
}
