export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public userName: string,
    public password: string,
    public dob: String,
    public email: string,
    public address: string,
    public skills: string[],
    public location: string
    // public age : number
  ) {}
}
