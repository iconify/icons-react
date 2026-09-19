import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g63mxooxl.css';
import '../../css/f/f0p3izb7e.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1)" class="n1lsf0bnc"><path class="g63mxooxl"/><ellipse class="f0p3izb7e"/></g>`,
		"fallback": "si-glyph:ying-yang",
	});
}

export default Component;
