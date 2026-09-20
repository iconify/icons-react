import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt_88-bgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt_88-bgl"/>`,
		"fallback": "thesvg-color:xda-developers",
	});
}

export default Component;
