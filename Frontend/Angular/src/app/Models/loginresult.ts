import { User } from "./user";

export class LoginResult{

    constructor(
      public user : User,
      public message : string,
      public token : string
    ) {

    }
}
