import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pv7d2m6_b.css';
import '../../css/e/epyc3ir8j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pv7d2m6_b"/><path class="epyc3ir8j"/></g>`,
		"fallback": "streamline-color:wheelchair-1",
	});
}

export default Component;
