import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bmsb34bxx.css';
import '../../css/o/oh_5n6b-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="bmsb34bxx"/><path class="oh_5n6b-f"/></g>`,
		"fallback": "lets-icons:winter-fill",
	});
}

export default Component;
