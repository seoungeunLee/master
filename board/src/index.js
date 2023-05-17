import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


class Square extends React.Component {
  render() {
    return (
      // <button className="square" onClick={function() {console.log('click'); }}>
      // <button className="square" onClick={() => {console.log('click'); }}>
      <button className="square" onClick={() => this.props.onClick()}>
        {/* TODO */}
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props){
    // ? 하위 클래스의 생성자를 정의할때 항상 super를 호출해야함 
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i){
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={()=> this.handleClick(i)} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div className='w-fit'>
        <div className="status block">{status}</div>
        <div className="flex w-[500px]">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="flex w-[500px]">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="flex w-[500px]">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


