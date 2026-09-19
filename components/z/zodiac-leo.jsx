import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/item46b2l.css';
import '../../css/c/c7ptr7brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="item46b2l"/><path class="c7ptr7brf"/></g>`,
		"fallback": "hugeicons:zodiac-leo",
	});
}

export default Component;
