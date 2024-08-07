import PointsFactory from './PointsFactory.js';
import PointsWorker from './PointsWorker.js';

const staticPoints = new PointsFactory(false).points;
const ordereStaticPoints = PointsWorker.generate(staticPoints);

console.log(ordereStaticPoints.join('-'));
