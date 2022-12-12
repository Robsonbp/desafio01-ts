import { DioAccount } from "./DioAccount";

export class VipAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (valorDeposito: number): void => {
        if(this.validateStatus()){
            this.balance += valorDeposito + 10
            console.log('Você depositou ' + valorDeposito.toString() + ' com sucesso')
          }
    }
}