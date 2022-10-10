import { Th } from "./TableHead.styles";

function TableHead() {
  return (
    <thead>
      <tr>
        <Th>#</Th>
        <Th>Name</Th>
        <Th>Price</Th>
        <Th>1h%</Th>
        <Th>24h%</Th>
        <Th>7d%</Th>
        <Th>24h Volume/Market Cap</Th>
        <Th>Circulating/Total Supply</Th>
        <Th>Last 7d</Th>
      </tr>
    </thead>
  );
}

export default TableHead;
