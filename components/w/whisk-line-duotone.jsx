import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aj6qckodu.css';
import '../../css/n/n31o93rng.css';
import '../../css/j/jxcwdzb9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="aj6qckodu"/><path class="n31o93rng"/><path class="jxcwdzb9o"/></g>`,
		"fallback": "solar:whisk-line-duotone",
	});
}

export default Component;
