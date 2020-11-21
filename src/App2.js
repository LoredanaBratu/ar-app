import React, { Component } from "react";
import items from "./items";
import App3 from "./App3";

class App extends Component {
  state = {
    showItemsList: true,
    selectedItem: {},
  };

  componentDidMount() {
    alert("777");
  }

  handleSelectItem(item) {
    this.setState({
      showItemsList: false,
      selectedItem: item,
    });
  }

  getItems() {
    return (
      <div className="wrapper-items">
        <div className="title">Items</div>
        <div className="sub-title-text"> Select an item </div>
        <div className="items-list">
          {items.map((item) => {
            return (
              <div className="card" key={item.id}>
                <img
                  src={item.item}
                  alt={item.title}
                  onClick={() => this.handleSelectItem(item)}
                />
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    const { selectedItem, showItemsList } = this.state;
    return (
      <div className="App">
        {showItemsList && this.getItems()}
        {!showItemsList && <App3 element={selectedItem} />}
      </div>
    );
  }
}

export default App;
