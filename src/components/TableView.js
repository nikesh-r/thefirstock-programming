import React, { useEffect, useState } from "react";

const TableView = ({ data }) => {
  const [tableData, setTableData] = useState(null);
  useEffect(() => {
    const tableDataResult = [];

    data.reduce((acc, curr) => {
      return curr.batters?.batter?.forEach((item) => {
        tableDataResult.push({
          ...curr,
          _id: `${curr.id}-${item.id}`,
          batter: item,
        });
      });
    }, []);
    setTableData(tableDataResult);
  }, [data]);

  return (
    <>
      {tableData ? (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>type</th>
                <th>name</th>
                <th>ppu</th>
                <th>batter</th>
                <th>topping</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => {
                const toppings = item.topping.map((top) => top.type).join(", ");
                return (
                  <tr key={item._id}>
                    <td>{item.id}</td>
                    <td>{item.type}</td>
                    <td>{item.name}</td>
                    <td>{item.ppu}</td>
                    <td>{item.batter.type}</td>
                    <td>{toppings}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
    </>
  );
};

export default TableView;
