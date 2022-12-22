import { DioAccount } from "./DioAccount";

export class VipAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    public deposit (valorDeposito: number): void {
        super.deposit(valorDeposito + 10)
    }

}