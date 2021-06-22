const goods = {
  name: "milk",
  boxSize: "12",
  unit: "liter",
  commodity_group: "Мilk products",
  company: "Marianna LLC",
  store: true,
  availableInStore(){
    if(this.store) {
      console.log("Available in store");
    } else {
      console.log("Not available");
    }
  }
}

const goodsInStore = {
  storeName: "Stor_1"
}

goodsInStore.__proto__ = goods;

goodsInStore.availableInStore();
// console.log(goods, '\n', goodsInStore);
console.log(goodsInStore.unit);



