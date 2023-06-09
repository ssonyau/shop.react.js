import React from "react";
import Header from "./compinents/Header";
import Footer from "./compinents/footer";
import Items from "./compinents/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      oders: [],
      items: [
        {
          id: 1,
          title: 'Gray chair',
          img: 'chair-gray.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Table',
          img: 'table.webp',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'tables',
          price: '159.99'
        },
        {
          id: 3,
          title: 'Dresser',
          img: 'dresser.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'dressers',
          price: '200.99'
        },
        {
          id: 4,
          title: 'Wooden bed',
          img: 'wooden-bed.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'beds',
          price: '549.99'
        },
        {
          id: 5,
          title: 'Iron bed',
          img: 'iron bed.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'beds',
          price: '999.99'
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.oders} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    this.setState({ orders: [...this.state.oders, item] })
  }

};


export default App; 