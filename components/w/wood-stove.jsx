import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xh615mbjx.css';
import '../../css/v/vshyqdb9o.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="xh615mbjx"/><path class="vshyqdb9o"/></g>`,
		"fallback": "si-glyph:wood-stove",
	});
}

export default Component;
