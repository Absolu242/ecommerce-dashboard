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
  return {
    product: namor.generate({ words: 1 }),
    location: namor.generate({ words: 1 }),

    spent: Math.floor(Math.random() * 100),
    orders: Math.floor(Math.random() * 100),
  };
};

export default function customerData(...lens) {
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
