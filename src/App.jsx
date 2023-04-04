import React from "react";
import Header from "./compinents/Header";
import Footer from "./compinents/footer";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
          title: 'table',
          img: 'table.webp',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'tables',
          price: '159.99'
        },
        {
          id: 3,
          title: 'dresser',
          img: 'dresser.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'dressers',
          price: '200.99'
        },
        {
          id: 4,
          title: 'wooden bed',
          img: 'wooden-bed.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'beds',
          price: '549.99'
        },
        {
          id: 5,
          title: 'iron bed',
          img: 'iron bed.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'beds',
          price: '999.99'
        },
        {
          id: 5,
          title: 'iron bed',
          img: 'iron bed.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'beds',
          price: '999.99'
        },
      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Footer />
      </div>
    );
  }
};


export default App;