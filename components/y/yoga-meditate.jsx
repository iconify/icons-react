import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j-_c3bbkr.css';
import '../../css/m/m0vdq-b3h.css';
import '../../css/p/pd-67fbhx.css';
import '../../css/g/gl52c-0ib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j-_c3bbkr"/><path class="m0vdq-b3h"/><path class="pd-67fbhx"/><path class="gl52c-0ib"/></g>`,
		"fallback": "streamline-ultimate-color:yoga-meditate",
	});
}

export default Component;
