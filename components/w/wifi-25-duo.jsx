import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hy9dkzbqr.css';
import '../../css/t/tq--gvbbt.css';
import '../../css/r/rdhequ6zt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hy9dkzbqr"/><path class="tq--gvbbt"/><path class="rdhequ6zt"/></g>`,
		"fallback": "glyphs:wifi-25-duo",
	});
}

export default Component;
