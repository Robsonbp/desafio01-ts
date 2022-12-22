import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan (valorEmprestimo: number): void {
    super.deposit(valorEmprestimo)
  }
}
