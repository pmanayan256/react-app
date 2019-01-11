import React, { Component } from "react";

class AddProduct extends Component {
  render() {
    return (
      <div id="product-container" className="product-container">
        <div>
          <div className="popup-header">
            <div>
              Add Product
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
            onSubmit={this.props.AddProduct}
          >
            <div>
              <label>Product Name: </label>
              <input
                type="text"
                required
                onChange={e => this.props.onUpdateProductName(e)}
              />
            </div>
            <div>
              <label>Quantity: </label>
              <input
                type="number"
                required
                onChange={e => this.props.onUpdateQuantity(e)}
              />
            </div>
            <div>
              <label>Measurement: </label>
              <input
                type="text"
                required
                onChange={e => this.props.onUpdateMeasurement(e)}
              />
            </div>
            <div>
              <label>Original Price: </label>
              <input
                type="number"
                required
                onChange={e => this.props.onUpdateOriginalPrice(e)}
              />
            </div>
            <div>
              <label>Selling Price: </label>
              <input
                type="number"
                required
                onChange={e => this.props.onUpdateSellingPrice(e)}
              />
            </div>
            <div>
              <label>Supplier: </label>
              <input
                type="text"
                required
                onChange={e => this.props.onUpdateSupplier(e)}
              />
            </div>
            <div>
              <input type="submit" value="Add" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddProduct;
