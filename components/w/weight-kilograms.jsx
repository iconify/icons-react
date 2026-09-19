import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pw_c9ebdo.css';
import '../../css/x/xh9tl8kkl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="pw_c9ebdo"/><path class="xh9tl8kkl"/></g>`,
		"fallback": "si-glyph:weight-kilograms",
	});
}

export default Component;
