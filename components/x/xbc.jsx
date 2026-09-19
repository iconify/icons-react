import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ehzg4rp2c.css';
import '../../css/w/wuvaihb8t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="ehzg4rp2c"/><path class="wuvaihb8t"/></g>`,
		"fallback": "cryptocurrency-color:xbc",
	});
}

export default Component;
