import { CATEGORIES } from '../entities/StockItem'
import '../styles/form.css'
export default function ItemForm() {
  return (
    <form>
      <div className="row">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label htmlFor="quantity">Quantity</label>
          <input type="number" name="quantity" id="quantity" min={0} step={1} required />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="number" name="price" id="price" min={0} step={0.01} required/>
        </div>
        <div>
          <label htmlFor="price">Category</label>
          <select>
            <option value="">Select one category</option>
            {
              CATEGORIES.map((category) => (
                console.log(category),
                <option key={category } value={category}>{category}</option>
              ))
            }
          </select>
        </div>
        <div className='row'>
            <div>
              <label htmlFor="describe">Description</label>
              <textarea name="describe" id="describe" />
            </div>
        </div>
      </div>
      <button className='button is-larger is-primary' >Send</button>
    </form>
  )
}
