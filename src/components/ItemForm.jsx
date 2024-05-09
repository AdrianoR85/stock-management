import StockItem, { CATEGORIES } from '../entities/StockItem';
import { useState } from "react"
import useStock from '../hooks/useStock';
import PropTypes from 'prop-types'
import '../styles/form.css'

ItemForm.propTypes = {
  itemToUpdate: PropTypes.instanceOf(StockItem)
}
export default function ItemForm({itemToUpdate}) {
  const defaultItem = {
    name: "",
    describe: "",
    quantity: 0,
    price: 0,
    category: ""
  }
  const [item, setItem] = useState(itemToUpdate ? itemToUpdate : defaultItem)
  const [addItem ] = useStock()

  const handleChange = (ev) => {
    setItem(currentStock => ({...currentStock, [ev.target.name]: ev.target.value}))
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    try {
      console.log(item)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required value={item.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="quantity">Quantity</label>
          <input type="number" name="quantity" id="quantity" required min={0} step={1} value={item.quantity} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="number" name="price" id="price" required min={0.00} step={0.01} value={item.price} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select name="category" id="category" required value={item.category} onChange={handleChange}>
            <option disabled value=" " >Select one category...</option>
            {CATEGORIES.map(category =>(
              <option key={category} value={category} defaultChecked={item.category === category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="row">
        <div>
          <label htmlFor="describe">Description</label>
          <textarea name="describe" id="describe" rows="5" required value={item.describe} onChange={handleChange}></textarea>
        </div>
      </div>
      <button className='button'>Send</button>
    </form>
  )
}
