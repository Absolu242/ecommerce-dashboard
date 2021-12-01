import namor from "namor";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

// function randomDate(start, end) {
//   return new Date(
//     start.getTime() + Math.random() * (end.getTime() - start.getTime())
//   );
// }
// let date = randomDate(new Date(2021, 5, 1), new Date());

const newPerson = () => {
  const statusChance = Math.random();
  return {
    order: `#${Math.floor(Math.random() * (10000 - 1000 + 1) + 1000)}`,
    date: "May 5, 4:30 PM",
    customer: namor.generate({ words: 1 }),
    payementstatus:
      statusChance > 0.66
        ? "paid"
        : statusChance > 0.33
        ? "pending"
        : "pending",
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? "ready"
        : statusChance > 0.33
        ? "shipped"
        : "received",
  };
};

export default function orderData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
