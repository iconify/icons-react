import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cn7ft0bub.css';
import '../../css/g/gvl5rbbth.css';
import '../../css/v/vu7icbcnb.css';
import '../../css/y/yihsiub0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="cn7ft0bub wm-shadow"/><path class="gvl5rbbth wm-shadow"/><path class="vu7icbcnb"/><path class="yihsiub0f"/></g>`,
		"fallback": "withicons-brutal:zoom-out",
	});
}

export default Component;
