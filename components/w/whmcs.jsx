import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1yghxbym.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1yghxbym"/>`,
		"fallback": "fa-brands:whmcs",
	});
}

export default Component;
