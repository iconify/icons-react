import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vnparwb4l.css';
import '../../css/u/ug41in33z.css';
import '../../css/d/dwv9pzbvo.css';
import '../../css/v/vy222h15i.css';
import '../../css/l/l3m-pzb_g.css';
import '../../css/k/klmhhzzlx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vnparwb4l"/><path class="ug41in33z"/><path class="dwv9pzbvo"/><path class="vy222h15i"/><path class="l3m-pzb_g"/><path class="klmhhzzlx"/></g>`,
		"fallback": "streamline-cyber-color:webcam",
	});
}

export default Component;
