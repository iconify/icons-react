import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l_sksbcqk.css';
import '../../css/w/wy5w0bbfk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="l_sksbcqk"/><path class="wy5w0bbfk"/></g>`,
		"fallback": "glyphs-poly:wifi-2",
	});
}

export default Component;
