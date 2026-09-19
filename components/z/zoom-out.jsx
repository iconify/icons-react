import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u4u-atzby.css';
import '../../css/w/wg70lcbzp.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="u4u-atzby"/><path class="wg70lcbzp"/></g>`,
		"fallback": "si-glyph:zoom-out",
	});
}

export default Component;
