import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g6-gthnnk.css';
import '../../css/d/dsh1twbmb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="g6-gthnnk"/><path class="dsh1twbmb"/></g>`,
		"fallback": "cryptocurrency-color:xcp",
	});
}

export default Component;
