import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { VipAccount } from './class/VipAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(20)
peopleAccount.withdraw(15)
peopleAccount.getBalance
peopleAccount.getName

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(20)
companyAccount.withdraw(10)
companyAccount.getBalance()
companyAccount.getName()
companyAccount.getLoan(20)

const vipAccount: VipAccount = new VipAccount('Robson', 100)
vipAccount.getName()
vipAccount.deposit(30)
vipAccount.withdraw(31)
vipAccount.getBalance()

console.log(peopleAccount)
console.log(companyAccount)
console.log(vipAccount)