export const CATEGORIES = [
  "Game",
  "Book",
  "Clothes",
  "Electronics",
  "Food",
  "Furniture",
]

export default class StockItem {
  constructor({pname, describe, quantity, price, category}) {
    this.id = Math.floor(Math.random() * 10000000)
    this.name = pname
    this.describe = describe
    this.quantity = quantity
    this.price = price
    this.category = category
    this.createdAt = new Date()
    this.updatedAt = new Date()
    this.#validate()
  }

  #validate() {
    const validName = typeof this.name === "string"
    const validDescribe = typeof this.describe === "string"
    const validQuantity = typeof this.quantity === "number"
    const validPrice = typeof this.price === "number" 
    const validCategory = CATEGORIES.includes(this.category)

    if (!(validName && validDescribe && validQuantity && validPrice && validCategory)){
      throw new Error('Valid Item!')
    }
  }

}
