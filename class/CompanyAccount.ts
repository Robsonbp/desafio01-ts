import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (valorEmprestimo: number): void => {
    if (this.validateStatus())
    console.log('Empréstimo realizado com sucesso.')
    this.getBalance
  }
}
