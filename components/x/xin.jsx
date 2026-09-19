import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uge7rkbio.css';
import '../../css/k/k59husk0e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="uge7rkbio"/><path class="k59husk0e"/></g>`,
		"fallback": "cryptocurrency-color:xin",
	});
}

export default Component;
