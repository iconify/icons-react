import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cn7ft0bub.css';
import '../../css/g/gvl5rbbth.css';
import '../../css/w/wiqa8r46t.css';
import '../../css/i/i5uzbo25u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="cn7ft0bub wm-shadow"/><path class="gvl5rbbth wm-shadow"/><path class="wiqa8r46t"/><path class="i5uzbo25u"/></g>`,
		"fallback": "withicons-brutal:zoom-in",
	});
}

export default Component;
