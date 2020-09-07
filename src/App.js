import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Tic tac toe</h1>
      <Game css={{ backgroundColor: "red" }} />
    </div>
  );
}

function generateGrid(rows, columns, mapper) {
  return Array(rows)
    .fill()
    .map(() => Array(columns).fill().map(mapper));
}

const newTicTacToeGrid = () => generateGrid(3, 3, () => null);

function Grid({ grid }) {
  return (
    <div css={{ display: "inline-block" }}>
      <div
        css={{
          backgroundColor: "#444",
          display: "grid",
          gridTemplateRows: `repeat(${grid.length}, 1fr)`,
          gridTemplateColumns: `repeat(${grid[0].length}, 1fr)`,
          gridGap: 2
        }}
      >
        {grid.map((row, rowIdx) =>
          row.map((value, colIdx) => (
            <Cell key={`${colIdx}-${rowIdx}`} value={value} />
          ))
        )}
      </div>
    </div>
  );
}

function Cell({ value }) {
  return (
    <div
      css={{
        backgroundColor: "#fff",
        width: "100%",
        height: "100%"
      }}
    >
      {value}
    </div>
  );
}

function Game() {
  const grid = newTicTacToeGrid();
  return (
    <div css={{ display: "inline-block" }}>
      <button>Click</button>
      <Grid grid={grid} />
    </div>
  );
}
