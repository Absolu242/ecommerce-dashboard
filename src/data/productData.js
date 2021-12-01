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

let colors = ["red", "green", "blue", "orange", "yellow"];

const newPerson = () => {
  const statusChance = Math.random();
  return {
    product: namor.generate({ words: 1 }),
    inventory:
      statusChance > 0.36
        ? `${Math.floor(Math.random() * 100)} in stock`
        : "Out of Stock",
    color: colors[Math.floor(Math.random() * colors.length)],
    payementstatus:
      statusChance > 0.66
        ? "paid"
        : statusChance > 0.33
        ? "pending"
        : "pending",
    progress: Math.floor(Math.random() * 100),
    rating: `${Math.floor(Math.random() * (5 - 1) + 1).toFixed(
      1
    )} (${Math.floor(Math.random() * 100)} votes)`,
  };
};

export default function productData(...lens) {
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
