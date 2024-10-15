import React from "react";
import { List } from "react-virtualized";
import "react-virtualized/styles.css";

const LargeList = () => {
  const list = Array.from({ length: 500 }, (_, index) => index + 1);

  const rowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        {list[index]}
      </div>
    );
  };

  return (
    <div style={{ height: 400, width: 300 }}>
      <List
        width={300}
        height={400}
        rowCount={list.length}
        rowHeight={30}
        rowRenderer={rowRenderer}
      />
    </div>
  );
};

export default LargeList;
