"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: 'Philip',
    bankAccount: bankAccount,
    hobbies: ['programming', 'music']
};
myself.bankAccount.deposit(3000);
console.log(myself);
