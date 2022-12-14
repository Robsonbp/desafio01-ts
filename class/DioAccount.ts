export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  // setName = (name: string): void => {
  //   this.name = name
  //   console.log('Nome alterado com sucesso!')
  // }

  public getName = (): string => {
    return this.name
  }

  public deposit = (valorDeposito: number): void => {
    if(this.validateStatus()){
      this.balance += valorDeposito
    }else {
      throw new Error('Conta inválida')
    }
  }

  public withdraw = (valorRetirada: number): void => {
    if (this.balance >= valorRetirada && this.validateStatus()){
      this.balance -= valorRetirada
    }else{
      throw new Error('Conta não possui fundos suficientes ou não está ativa no momento')
    }  
  }

  public getBalance = (): void => {
    console.log(this.balance)
  }


  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
