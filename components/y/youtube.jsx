import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/movj3iwhm.css';
import '../../css/r/rev0qgb7v.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/k/kpyumnb5c.css';
import '../../css/i/iahg22pun.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="movj3iwhm"/><path class="rev0qgb7v"/><g class="x8poo_bjf"><path class="kpyumnb5c"/><path class="iahg22pun"/></g>`,
		"fallback": "openmoji:youtube",
	});
}

export default Component;
