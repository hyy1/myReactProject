
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function calculateWinner(squares){
  const lines= [
    [0 ,1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for(let i = 0;i < lines.length; i++){
    const [a, b, c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}
function Square(props){
 return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  handleClick(i){
    const squares = this.state.squares.slice();
    if(calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    })
  }
  // constructor(){
  //   super();
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: true
  //   }
  // }
  renderSquare(i) {
    return (
      <Square 
        value={this.props.squares[i]} 
        onClick={()=>this.props.onClick(i)} 
      />
    );
  }

  render() {
    let status;
    const winner = calculateWinner(this.state.squares);
    if(winner){
      status = "Winner：" + winner;
    }else{
      status = "Next player: " + ( this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(){
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true
    }
  }


  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board onClick={()=>this.handleClick()} xIsNext={this.state.xIsNext} squares={this.state.history.squares}/>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// function judge(ary){
//   const lines = [
//     [0 ,1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for(let i=0; i < lines.length; i++){
//     const [a, b, c] = lines[i];
//     if(ary[a] && ary[a] === ary[b] && ary[a] === ary[c]){
//       return ary[a];
//     }
//   }
//   return null;
// }

// function Btn(props){
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   )
// }

// class Board extends React.Component {

//   handlechange(i){
//     const ary2 = this.state.ary.slice();
//     if(judge(ary2) || ary2[i]){
//       return;
//     }
//     ary2[i] = this.state.xIsNext ? "X" : "O";
//     this.setState({
//       ary: ary2,
//       xIsNext: !this.state.xIsNext
//     })
//   }
//   getBtn(i){
//     return(
//       <Btn 
//         value= {this.state.ary[i]} 
//         onClick= {()=>this.handlechange(i)}
//       />
//     )
//   }
//   render() {
//     let status;
//     if(judge(this.state.ary)){
//       status = "winner:" + judge(this.state.ary);
//     }else{
//       status = "Next:" + (this.state.xIsNext ? "X" : "O");
//     }
//     return(
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.getBtn(0)}
//           {this.getBtn(1)}
//           {this.getBtn(2)}
//         </div>
//         <div className="board-row">
//           {this.getBtn(3)}
//           {this.getBtn(4)}
//           {this.getBtn(5)}
//         </div>
//         <div className="board-row">
//           {this.getBtn(6)}
//           {this.getBtn(7)}
//           {this.getBtn(8)}
//         </div>
//       </div>
//     )
//   }
// }

// class Game extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       history: [{
//         squares: Array(9).fill(null)
//       }],
//       xIsNext: true
//     }
//   }
//   render(){
//     return (
//       <div className="game">
//         <Board xIsNext={this.state.xIsNext} history={this.state.history} />
//       </div>
//     )
//   }
// }
// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
