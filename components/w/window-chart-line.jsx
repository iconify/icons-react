import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kfzcnbb6p.css';
import '../../css/r/rm94l1jha.css';
import '../../css/k/k2e-prbdi.css';
import '../../css/q/qd4ogl5wu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kfzcnbb6p"/><rect transform="matrix(-1 0 0 -1 24 24)" class="rm94l1jha"/><circle class="k2e-prbdi"/><circle class="qd4ogl5wu"/></g>`,
		"fallback": "reicon:window-chart-line",
	});
}

export default Component;
