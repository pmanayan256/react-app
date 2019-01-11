import React, { Component } from "react";

class Product extends Component {
  render() {
    const { item } = this.props;
    return (
      <tr>
        <td>{item.id}</td>
        <td>{item.product_name}</td>
        <td>{item.quantity}</td>
        <td>{item.measurement}</td>
        <td>{item.original_price}</td>
        <td>{item.profit}</td>
        <td>{item.selling_price}</td>
        <td>{item.supplier}</td>
        <td>
          <div onClick={() => this.props.DeleteProduct(item.id)}>Delete</div>
        </td>
        <td>
          <div onClick={() => this.props.EditProduct(item)}>Edit</div>
        </td>
      </tr>
    );
  }
}

export default Product;
