const container = document.querySelector("#app");

function Display(props) {
  const counter = props.count;
  return (
    <div className={`count ${counter < 0 ? " negative" : ""}`}>{counter} </div>
  );
}

function Button(props) {
  return (
    <button className="button" onClick={props.functionToCall}>
      {props.text}
    </button>
  );
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initial };
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
        <Display count={this.state.count} />
        <Button text="+" functionToCall={this.incrementCount.bind(this)} />
        <Button text="-" functionToCall={this.decrementCount.bind(this)} />
      </div>
    );
  }
}

function MultipleCounter() {
  const counters = [
    { id: "123", initialCount: 0 },
    { id: "124", initialCount: 1 },
    { id: "125", initialCount: 2 },
    { id: "126", initialCount: 3 }
  ];

  //creates a list of React elements/components
  const counterItems = counters.map(x => {
    return <Counter key={x.id} initial={x.initialCount} />;
  });

  return <React.Fragment>{counterItems}</React.Fragment>;
}

// const element = <Counter />;
const element = <MultipleCounter />;

ReactDOM.render(element, container);
