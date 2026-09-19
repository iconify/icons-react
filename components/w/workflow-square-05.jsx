import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e2glyv-oe.css';
import '../../css/o/o734-xwms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="e2glyv-oe"/><path class="o734-xwms"/></g>`,
		"fallback": "hugeicons:workflow-square-05",
	});
}

export default Component;
