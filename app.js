const container = document.querySelector("#app");

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  decrementCount = () => {
    this.setState(state => ({
      count: state.count - 1
    }));
  };

  render() {
    return (
      <div className="container">
        <button className="button">{this.state.count}</button>
        <button className="button" onClick={this.incrementCount.bind(this)}>
          +
        </button>
        <button className="button" onClick={this.decrementCount}>
          -
        </button>
      </div>
    );
  }
}

const element = <Counter />;
ReactDOM.render(element, container);
