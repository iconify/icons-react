import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hy9dkzbqr.css';
import '../../css/h/hyxs7bcqn.css';
import '../../css/n/ndn6ppj7v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hy9dkzbqr"/><path class="hyxs7bcqn"/><path class="ndn6ppj7v"/></g>`,
		"fallback": "glyphs:wifi-75-duo",
	});
}

export default Component;
