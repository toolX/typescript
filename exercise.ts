type BankAccount = { money: number, deposit: (value: number) => void };

let bankAccount: BankAccount = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let myself: { name: string, bankAccount: BankAccount, hobbies: string[] } = {
  name: 'Philip',
  bankAccount: bankAccount,
  hobbies: ['programming', 'music']
};

myself.bankAccount.deposit(3000);

console.log(myself);