const vertices = [-21, -5, -1, 0, 1, 3, 11];

// const pairedVertices = pairVertices();
// function pairVertices() {
//   let result = [];
//   for (let i = 0; i < vertices.length; i++) {
//     const vertex = vertices[i];
//     let nextVertex = null;

//     const filteredVertices = vertices.filter(excludeCurrentVertex);
//     for (let x = 0; x < vertices.filter(excludeCurrentVertex).length; x++) {
//       nextVertex = filteredVertices[x];

//       if (verticesAreNotConnectedYet()) {
//         result.push({
//           id: `${i}${x}`,
//           s: vertex,
//           t: nextVertex,
//         });
//       }
//     }

//     function excludeCurrentVertex(v) {
//       return v != vertex;
//     }
//     function verticesAreNotConnectedYet() {
//       return result.find((c) => c.s == nextVertex && c.t == vertex) == null;
//     }
//   }
//   return result;
// }

// let dist = Math.abs(Math.max());
// let closestPair = null;

// for (let i = 0; i < pairedVertices.length; i++) {
//   const pair = pairedVertices[i];
//   const distanceBetweenVertices = Math.abs(pair.s - pair.t);

//   if (distanceBetweenVertices < dist) {
//     dist = distanceBetweenVertices;
//     closestPair = pair;
//   }
// }

const pairs = [];
let closestPair = null;
for (let i = 0; i < vertices.length - 1; i++) {
  let distance = Math.abs(Math.max());
  const s = vertices[i];

  const filteredVertices = vertices.filter(excludeCurrent);

  for (let x = 0; x < filteredVertices.length; x++) {
    const t = filteredVertices[x];

    if (distance > distanceBetweenVertices()) {
      distance = distanceBetweenVertices();
      pairs.push({ s, t });
      closestPair = { s, t };
    }

    function distanceBetweenVertices() {
      return Math.abs(s - t);
    }
  }

  function excludeCurrent(vertex) {
    return vertex != s;
  }
}
