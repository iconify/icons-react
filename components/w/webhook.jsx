import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cxtnstbes.css';
import '../../css/c/ciescfx1e.css';
import '../../css/l/l87mh_b9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="cxtnstbes wm-shadow"/><path class="ciescfx1e wm-shadow"/><path class="l87mh_b9d"/></g>`,
		"fallback": "withicons-brutal:webhook",
	});
}

export default Component;
