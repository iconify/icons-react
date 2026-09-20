import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-83soh2y.css';
import '../../css/h/hgk6bv4uj.css';
import '../../css/q/q33-5ccgc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x-83soh2y"/><path class="hgk6bv4uj"/><path class="q33-5ccgc"/></g>`,
		"fallback": "streamline-color:web",
	});
}

export default Component;
