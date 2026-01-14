import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/products';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      products : [
        {id : 1 , name : "Iphone"},
        {id : 2 , name : "Apple"}
      ]
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  AddProduct = () => {
    if (this.state.id === '' || this.state.name === '') return;

    const newProduct = {
      id: this.state.id,
      name: this.state.name
    };

    this.setState({
      products: [...this.state.products, newProduct],
      id: '',
      name: ''
    });
  };

  render() {
    return (
      <div>
        <h2>Quản lý sản phẩm</h2>

        <input
          type="text"
          name="id"
          placeholder="Nhập ID"
          value={this.state.id}
          onChange={this.handleChange}
        />

        <br />

        <input
          type="text"
          name="name"
          placeholder="Nhập tên sản phẩm"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <br /><br />

        <button onClick={this.AddProduct}>Thêm sản phẩm</button>

        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default App;
