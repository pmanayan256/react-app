import React, { Component } from "react";
import "./App.css";
import Product from "./components/product";
import AddProduct from "./components/addproduct";
import UpdateProduct from "./components/updateproduct";

class App extends Component {
  state = {
    window_value: "false",
    items: [
      {
        id: 1,
        product_name: "Pen",
        quantity: 35,
        measurement: "Piece",
        original_price: 25,
        profit: 10,
        selling_price: 35,
        supplier: "Smart"
      },
      {
        id: 2,
        product_name: "Pen",
        quantity: 35,
        measurement: "Piece",
        original_price: 25,
        profit: 10,
        selling_price: 35,
        supplier: "Smart"
      },
      {
        id: 3,
        product_name: "Pen",
        quantity: 35,
        measurement: "Piece",
        original_price: 25,
        profit: 10,
        selling_price: 35,
        supplier: "Smart"
      },
      {
        id: 4,
        product_name: "Pen",
        quantity: 35,
        measurement: "Piece",
        original_price: 25,
        profit: 10,
        selling_price: 35,
        supplier: "Smart"
      },
      {
        id: 5,
        product_name: "Pen",
        quantity: 35,
        measurement: "Piece",
        original_price: 25,
        profit: 10,
        selling_price: 35,
        supplier: "Smart"
      },
      {
        id: 6,
        product_name: "Pen",
        quantity: 35,
        measurement: "Piece",
        original_price: 25,
        profit: 10,
        selling_price: 35,
        supplier: "Smart"
      },
      {
        id: 7,
        product_name: "Pen",
        quantity: 35,
        measurement: "Piece",
        original_price: 25,
        profit: 10,
        selling_price: 35,
        supplier: "Smart"
      },
      {
        id: 8,
        product_name: "Pen",
        quantity: 35,
        measurement: "Piece",
        original_price: 25,
        profit: 10,
        selling_price: 35,
        supplier: "Smart"
      },
      {
        id: 9,
        product_name: "Pen",
        quantity: 35,
        measurement: "Piece",
        original_price: 25,
        profit: 10,
        selling_price: 35,
        supplier: "Smart"
      },
      {
        id: 10,
        product_name: "Pen",
        quantity: 35,
        measurement: "Piece",
        original_price: 25,
        profit: 10,
        selling_price: 35,
        supplier: "Smart"
      },
      {
        id: 11,
        product_name: "Pen",
        quantity: 35,
        measurement: "Piece",
        original_price: 25,
        profit: 10,
        selling_price: 35,
        supplier: "Smart"
      },
      {
        id: 12,
        product_name: "Pen",
        quantity: 35,
        measurement: "Piece",
        original_price: 25,
        profit: 10,
        selling_price: 35,
        supplier: "Smart"
      }
    ],
    product_form_data: {
      id: 0,
      product_name: "",
      quantity: 0,
      measurement: "",
      original_price: 0,
      profit: 0,
      selling_price: 0,
      supplier: ""
    },
    last_product_id: 12
  };

  onUpdateProductName = e => {
    const copy = this.state.product_form_data;
    copy.product_name = e.target.value;
    this.setState({ product_form_data: copy });
  };
  onUpdateQuantity = e => {
    const copy = this.state.product_form_data;
    copy.quantity = e.target.value;
    this.setState({ product_form_data: copy });
  };
  onUpdateMeasurement = e => {
    const copy = this.state.product_form_data;
    copy.measurement = e.target.value;
    this.setState({ product_form_data: copy });
  };
  onUpdateOriginalPrice = e => {
    const copy = this.state.product_form_data;
    copy.original_price = e.target.value;
    this.setState({ product_form_data: copy });
  };
  onUpdateProfit = () => {
    const copy = this.state.product_form_data;
    copy.profit = (copy.selling_price - copy.original_price).toLocaleString(
      undefined,
      { maximumFractionDigits: 2 }
    );

    this.setState({ product_form_data: copy });
  };
  onUpdateSellingPrice = e => {
    const copy = this.state.product_form_data;
    copy.selling_price = e.target.value;
    this.setState({ product_form_data: copy });
  };
  onUpdateSupplier = e => {
    const copy = this.state.product_form_data;
    copy.supplier = e.target.value;
    this.setState({ product_form_data: copy });
  };

  AddProduct = () => {
    this.onUpdateProfit();
    const {
      product_name,
      quantity,
      measurement,
      original_price,
      profit,
      selling_price,
      supplier
    } = this.state.product_form_data;
    const product_details = {
      id: this.state.last_product_id + 1,
      product_name: product_name,
      quantity: quantity,
      measurement: measurement,
      original_price: original_price,
      profit: profit,
      selling_price: selling_price,
      supplier: supplier
    };
    this.setState({ last_product_id: this.state.last_product_id + 1 });
    this.setState({
      items: this.state.items.concat([product_details])
    });

    this.OpenProductDetailsWindow("open");
  };

  DeleteProduct = id => {
    const items = this.state.items.filter(c => c.id !== id);
    this.setState({ items });
    window.location.href = "#";
  };

  EditProduct = item => {
    const items = { ...item };
    this.setState({ product_form_data: items });
    this.OpenProductDetailsWindow("open");
  };

  UpdateProduct = id => {
    this.onUpdateProfit();
    const product_details = this.state.items.map(item => {
      const {
        product_name,
        quantity,
        measurement,
        original_price,
        profit,
        selling_price,
        supplier
      } = this.state.product_form_data;
      if (item.id === id) {
        item.product_name = product_name;
        item.quantity = quantity;
        item.measurement = measurement;
        item.original_price = original_price;
        item.profit = profit;
        item.selling_price = selling_price;
        item.supplier = supplier;
      }
    });

    this.setState(product_details);

    this.OpenProductDetailsWindow("close");
  };

  OpenProductDetailsWindow = identifier => {
    if (this.state.window_value === "true") {
      this.setState({ window_value: "false" });
    } else {
      this.setState({ window_value: "true" });
    }

    if (identifier === "close") {
      const product_form_data = this.state.product_form_data;
      product_form_data.id = 0;
      this.setState({ product_form_data });
    } else {
    }
  };

  TotalProfit = () => {
    const items = this.state.items;
    const itemTotal = items.reduce(function(cnt, o) {
      return cnt + o.profit * o.quantity;
    }, 0);
    return itemTotal;
  };

  TotalItems = () => {
    const items = this.state.items;

    return items.length;
  };

  render() {
    return (
      <div className="main-container">
        <div className="header" id="item-1">
          <h1>Simple Inventory System</h1>
        </div>
        <div />
        <div className="items-table-container">
          <div className="add-product-button-container">
            <div>
              <h4>
                Total Profit:{" "}
                <span>
                  {this.TotalProfit().toLocaleString(undefined, {
                    maximumFractionDigits: 2
                  })}
                </span>
              </h4>
              <h4>
                Total Items: <span>{this.TotalItems()}</span>
              </h4>
            </div>
            <div>
              <span onClick={() => this.OpenProductDetailsWindow("open")}>
                Add Product
              </span>
            </div>
          </div>

          <table className="items-container">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Measurement</th>
                <th>Original Price</th>
                <th>Profit</th>
                <th>Selling Price</th>
                <th>Supplier</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Measurement</th>
                <th>Original Price</th>
                <th>Profit</th>
                <th>Selling Price</th>
                <th>Supplier</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
              {this.state.items.map(item => (
                <Product
                  item={item}
                  key={item.id}
                  DeleteProduct={this.DeleteProduct}
                  EditProduct={this.EditProduct}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <div visible={this.state.window_value}>
            {this.state.product_form_data.id === 0 ? (
              <AddProduct
                AddProduct={this.AddProduct}
                ClosePopup={this.OpenProductDetailsWindow}
                onUpdateProductName={this.onUpdateProductName}
                onUpdateQuantity={this.onUpdateQuantity}
                onUpdateMeasurement={this.onUpdateMeasurement}
                onUpdateOriginalPrice={this.onUpdateOriginalPrice}
                onUpdateProfit={this.onUpdateProfit}
                onUpdateSellingPrice={this.onUpdateSellingPrice}
                onUpdateSupplier={this.onUpdateSupplier}
              />
            ) : (
              <UpdateProduct
                UpdateProduct={this.UpdateProduct}
                ClosePopup={this.OpenProductDetailsWindow}
                item={this.state.product_form_data}
                onUpdateProductName={this.onUpdateProductName}
                onUpdateQuantity={this.onUpdateQuantity}
                onUpdateMeasurement={this.onUpdateMeasurement}
                onUpdateOriginalPrice={this.onUpdateOriginalPrice}
                onUpdateProfit={this.onUpdateProfit}
                onUpdateSellingPrice={this.onUpdateSellingPrice}
                onUpdateSupplier={this.onUpdateSupplier}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
