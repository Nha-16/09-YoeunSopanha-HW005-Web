import React from "react";
import { Table, Badge, Button } from "react-bootstrap";

export default function MyTable({ foods, onClear }) {
  console.log("Props on func:", foods);

  let temp = foods.filter(item => {
    return item.qty > 0
  })

  return (
    <>

      <Button onClick={onClear} variant="info my-2">Reset</Button>
      {/* <Badge variant="warning m-2">{temp.length} count</Badge> */}
      <p><span class="badge mt-4 m-2 badge-warning">{temp.length} count</span></p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Food</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {temp.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{item.price}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
        <thead>
          <th colspan="5" className="text-center">
            No data
          </th>
        </thead>
      </Table>
    </>
  );
}
