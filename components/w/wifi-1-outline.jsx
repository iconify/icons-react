import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvppwnbjr.css';
import '../../css/u/ufi06l-_c.css';
import '../../css/a/aqhz3zwqx.css';
import '../../css/r/rn27l3b6z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mvppwnbjr"/><path clip-rule="evenodd" class="ufi06l-_c"/><path class="aqhz3zwqx"/><path clip-rule="evenodd" class="rn27l3b6z"/></g>`,
		"fallback": "glyphs:wifi-1-outline",
	});
}

export default Component;
