import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dhy5ubc7h.css';
import '../../css/w/wkndhebik.css';
import '../../css/o/oca4bq-1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dhy5ubc7h"/><path class="wkndhebik"/><path class="oca4bq-1z"/></g>`,
		"fallback": "nrk:wifi-expressive",
	});
}

export default Component;
