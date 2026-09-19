import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qpfa0qbmx.css';
import '../../css/d/d2zn93bqf.css';
import '../../css/m/mnu-t7_gg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="qpfa0qbmx"/><path class="d2zn93bqf"/><path class="mnu-t7_gg"/></g>`,
		"fallback": "cryptocurrency-color:xvg",
	});
}

export default Component;
