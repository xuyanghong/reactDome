import './layer.less';
import './units.scss';
import './txt.scss';
import productBox from './layerIndex.js';
// debugger;

export default function Layer() {
  return {
    name: 'layer',
    tpl: productBox
  }
}


