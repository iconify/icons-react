import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hy9dkzbqr.css';
import '../../css/o/o0_zh3b7d.css';
import '../../css/m/m31raz69k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hy9dkzbqr"/><path class="o0_zh3b7d"/><path class="m31raz69k"/></g>`,
		"fallback": "glyphs:wifi-50-duo",
	});
}

export default Component;
