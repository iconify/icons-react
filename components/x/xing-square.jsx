import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9y9_htha.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9y9_htha"/>`,
		"fallback": "fa-brands:xing-square",
	});
}

export default Component;
