import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vng4nf2fv.css';
import '../../css/p/py2rk0n5y.css';
import '../../css/d/dpqp5wbog.css';
import '../../css/k/kf3vwpb8g.css';
import '../../css/y/y8whj2c6s.css';
import '../../css/m/m22tupbhk.css';
import '../../css/d/d57fel68w.css';
import '../../css/m/mbgj9dbiv.css';
import '../../css/k/k79kzh-ir.css';
import '../../css/y/ytx21dbxj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vng4nf2fv"/><circle class="py2rk0n5y"/><circle class="dpqp5wbog"/><g class="kf3vwpb8g"><path class="y8whj2c6s"/><path class="m22tupbhk"/></g><g class="kf3vwpb8g"><path class="d57fel68w"/><path class="mbgj9dbiv"/></g><g class="kf3vwpb8g"><path class="k79kzh-ir"/><path class="ytx21dbxj"/></g>`,
		"fallback": "flat-color-icons:workflow",
	});
}

export default Component;
