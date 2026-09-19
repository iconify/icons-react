import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sfiwdru9h.css';
import '../../css/h/h88y3frxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sfiwdru9h"/><path class="h88y3frxl"/></g>`,
		"fallback": "hugeicons:wifi-lock",
	});
}

export default Component;
