import { BankAccountId, BankId } from "@/types/utility";
import{v4 as uuid} from "uuid";
import { ac } from "vitest/dist/chunks/reporters.D7Jzd9GS";

export default class bankAccount{
    id:BankAccountId;
    balance: number;

    constructor(balance){
        this.id = uuid();
        this.balance = balance;

    }

    static create(balance){
        const acc = new bankAccount(balance);
        return acc;
    }
    getId(){
        return this.id;
    }
}