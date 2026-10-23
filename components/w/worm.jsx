import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l5m6g9-ky.css';
import '../../css/c/c5ecxybpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l5m6g9-ky"/><path class="c5ecxybpk"/></g>`,
		"fallback": "andrsrxn:worm",
	});
}

export default Component;
