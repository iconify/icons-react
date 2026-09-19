import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/frpbbwfuh.css';
import '../../css/u/uduaybb5f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="frpbbwfuh"/><path class="uduaybb5f"/></g>`,
		"fallback": "cryptocurrency-color:xas",
	});
}

export default Component;
