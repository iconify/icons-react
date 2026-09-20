import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kyetedcng.css';
import '../../css/k/kzgdfyekq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kyetedcng"/><path class="kzgdfyekq"/></g>`,
		"fallback": "streamline-color:wrench",
	});
}

export default Component;
