import { BankId } from "@/types/utility";
import bankAccount from "./bank-account";
import {v4 as uuid} from "uuid"
export default class Bank{
    name : string;
    bankid: BankId;
    accounts:bankAccount[];

    constructor(){
        this.bankid = uuid();
    }
    
    
    static create(){
       const bank = new Bank();
       return bank;

    }
    createAccount(balance){
        let account = bankAccount.create(balance);
        return account;
    }
    
    getId(){
        return this.bankid;
    }
}