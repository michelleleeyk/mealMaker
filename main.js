const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(insertAppetizer) {
    this._courses.appetizers = insertAppetizer;
  },
  set mains(insertMains) {
    this._courses.mains = insertMains;
  },
  set desserts(insertDesserts) {
    this._courses.desserts = insertDesserts;
  },
  get courses() {
    return {
      // this uses the appetizer getter method
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const index = Math.floor(Math.random() * dishes.length);
    return dishes[index];
  },
  generateRandomMeal() {
    //must put "" in argument! appetizers here is the value, not a variable!
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;
    return (`You will have ${appetizer.name} as your appetizer, ${main.name} asx
    your main and ${dessert.name} for dessert. This meal costs GBP
    ${totalPrice}.`)
  }
}

// add dishes to menu
menu.addDishToCourse("appetizers", "spring rolls", 2);
menu.addDishToCourse("appetizers", "satay", 3);
menu.addDishToCourse("appetizers", "dumplings", 3);
menu.addDishToCourse("mains", "soup noodles", 5);
menu.addDishToCourse("mains", "fried rice", 4);
menu.addDishToCourse("mains", "chicken rice", 5);
menu.addDishToCourse("desserts", "jelly", 1);
menu.addDishToCourse("desserts", "red bean soup", 1);
