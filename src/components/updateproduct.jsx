import React, { Component } from "react";

class UpdateProduct extends Component {
  render() {
    const {
      product_name,
      quantity,
      measurement,
      original_price,
      selling_price,
      supplier
    } = this.props.item;
    return (
      <div id="product-container" className="product-container">
        <div>
          <div className="popup-header">
            <div>
              Update Product
              <span
                className="close-popup"
                onClick={() => this.props.ClosePopup("close")}
              >
                <span />
                <span />
              </span>
            </div>
          </div>
          <form
            action="#"
            id="add-product-form"
            className="add-product-form"
            onSubmit={() => this.props.UpdateProduct(this.props.item.id)}
          >
            <div>
              <label>Product Name: </label>
              <input
                type="text"
                required
                value={product_name}
                onChange={e => this.props.onUpdateProductName(e)}
              />
            </div>
            <div>
              <label>Quantity: </label>
              <input
                type="number"
                required
                value={quantity}
                onChange={e => this.props.onUpdateQuantity(e)}
              />
            </div>
            <div>
              <label>Measurement: </label>
              <input
                type="text"
                required
                value={measurement}
                onChange={e => this.props.onUpdateMeasurement(e)}
              />
            </div>
            <div>
              <label>Original Price: </label>
              <input
                type="number"
                required
                value={original_price}
                onChange={e => this.props.onUpdateOriginalPrice(e)}
              />
            </div>
            <div>
              <label>Selling Price: </label>
              <input
                type="number"
                required
                value={selling_price}
                onChange={e => this.props.onUpdateSellingPrice(e)}
              />
            </div>
            <div>
              <label>Supplier: </label>
              <input
                type="text"
                required
                value={supplier}
                onChange={e => this.props.onUpdateSupplier(e)}
              />
            </div>
            <div>
              <input type="submit" value="Update" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UpdateProduct;
