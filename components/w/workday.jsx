import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fz4g6ybxa.css';
import '../../css/g/gvilvubwg.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fz4g6ybxa"/><path class="gvilvubwg"/></g>`,
		"fallback": "thesvg-color:workday",
	});
}

export default Component;
