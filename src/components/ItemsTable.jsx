import { Link } from "react-router-dom";

export default function ItemsTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0001</td>
          <td>Pencil</td>
          <td>10</td>
          <td>Officer</td>
          <td className="table-buttons">
            <Link className="button is-small is-primary">Details</Link>
            <Link className="button is-small">Update</Link>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

