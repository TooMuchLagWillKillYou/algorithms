const vertices = [-21, -5, -1, 0, 1, 3, 11];

// const pairs = [];
// let closestPair = null;
// for (let i = 0; i < vertices.length - 1; i++) {
//   let distance = Math.abs(Math.max());
//   const s = vertices[i];

//   const filteredVertices = vertices.filter(excludeCurrent);

//   for (let x = 0; x < filteredVertices.length; x++) {
//     const t = filteredVertices[x];

//     if (distance > distanceBetweenVertices()) {
//       distance = distanceBetweenVertices();
//       pairs.push({ s, t });
//       closestPair = { s, t };
//     }

//     function distanceBetweenVertices() {
//       return Math.abs(s - t);
//     }
//   }

//   function excludeCurrent(vertex) {
//     return vertex != s;
//   }
// }

// console.log(closestPair);

for (let i in vertices) {
  const currentVertex = vertices[i];
  const arr = vertices.filter(excludeCurrent);
  console.log(arr);

  function excludeCurrent(vertex) {
    return vertex != currentVertex;
  }
}
