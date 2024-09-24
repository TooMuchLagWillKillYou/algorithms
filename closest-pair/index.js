const vertices = [-21, -5, -1, 0, 1, 3, 11];

let chain = [];
for (let i = 0; i < vertices.length - 1; i++) {
  let distance = Math.abs(Math.max());
  let closestPair = {};

  for (const s of vertices) {
    for (const t of vertices.filter(excludeCurrent)) {
      if (distanceBetweenVerticesIsSmaller()) {
        // non deve chiudere il ciclo, quindi il primo e l'ultimo endpoint devono essere diversi
        // dobbiamo considerare solamente vertici validi, ovvero solo gli enpoint
        distance = distanceBetweenVertices();
        closestPair = { s, t };
      }

      function distanceBetweenVerticesIsSmaller() {
        return distance > distanceBetweenVertices();
      }
      function distanceBetweenVertices() {
        return Math.abs(s - t);
      }
    }

    function excludeCurrent(vertex) {
      return vertex != s;
    }
  }
  chain.push(closestPair);
}
console.log(chain);

// connetti le due estremità
