import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/hkk6oqb2y.css';
import '../../css/d/dh28lk72a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="hkk6oqb2y"/><path class="dh28lk72a"/></g>`,
		"fallback": "keyline-icons:wifi-exclamation-sharp-fill",
	});
}

export default Component;
