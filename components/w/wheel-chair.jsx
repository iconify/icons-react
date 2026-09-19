import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rgxtr7_5k.css';
import '../../css/f/fcnpq4b5e.css';
import '../../css/a/a4ixidv6h.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(2 1)" class="n1lsf0bnc"><ellipse class="rgxtr7_5k"/><path class="fcnpq4b5e"/><path class="a4ixidv6h"/></g>`,
		"fallback": "si-glyph:wheel-chair",
	});
}

export default Component;
