import bankAccount from "./bank-account";
import {UserId} from "@/types/utility";
import { v4 as uuid } from "uuid"

export default class User{
    name: string;
    id: UserId;
    accounts: bankAccount[];

    constructor(name, accounts){
        this.name = name;
        this.accounts = accounts;
        this.id = uuid();
    }

    static create(name, accounts){
        const obj= new User(name,accounts);
        return obj;
    }
   
    getid(){
        return this.id;
    }

}
