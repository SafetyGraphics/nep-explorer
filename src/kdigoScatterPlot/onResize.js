import drawKdigoStages from './onResize/drawKdigoStages';
import addPointClick from './onResize/addPointClick';
import addKdigoLegend from './onResize/addKdigoLegend';

export default function onResize() {
    drawKdigoStages.call(this);
    addPointClick.call(this);
    addKdigoLegend.call(this);
}
