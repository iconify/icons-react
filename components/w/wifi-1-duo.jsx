import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fxrmzxbcy.css';
import '../../css/e/ewfq1qbgr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fxrmzxbcy"/><path class="ewfq1qbgr"/></g>`,
		"fallback": "glyphs:wifi-1-duo",
	});
}

export default Component;
