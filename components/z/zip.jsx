import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/ssgg78swb.css';
import '../../css/r/rk5qygbpc.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ssgg78swb"/><path class="rk5qygbpc"/></g>`,
		"fallback": "si-glyph:zip",
	});
}

export default Component;
