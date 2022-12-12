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

  getName = (): string => {
    return this.name
  }

  deposit = (valorDeposito: number): void => {
    if(this.validateStatus()){
      this.balance += valorDeposito
      console.log('Você depositou ' + valorDeposito.toString() + ' com sucesso')
      this.getBalance
    }

    console.log('Validação da conta falhou')
  }

  withdraw = (valorRetirada: number): void => {
    if (this.balance >= valorRetirada && this.validateStatus()){
      this.balance -= valorRetirada
      console.log('Saque de ' + valorRetirada.toString() + ' feito com sucesso')
      this.getBalance()
    }
      
  }

  getBalance = (): void => {
    console.log(this.balance)
  }


  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
