'use strict';

class BaskinRobbins31 {
  constructor() {
    this.menu = null;
    this.tasteLevel = 0;
    this.price = 0;
  }

  setMenu(menu) {
    this.menu = menu;
    if (menu === 'choco') {
      this.setPrice(1000);
      this.setTasteLevel(5);
      console.log(`menu : ${this.menu}, tastelevel : ${this.tasteLevel}, price : ${this.price}`)
    }
  }

  setPrice(price) {
    this.price = price;
  }

  setTasteLevel(tasteLevel) {
    this.tasteLevel = tasteLevel;
  }

}

const baskinRobbinsMenu1 = new BaskinRobbins31(null, 0, 0);

baskinRobbinsMenu1.setMenu(chocoFlavour());

function chocoFlavour() {
  return 'choco';
}
