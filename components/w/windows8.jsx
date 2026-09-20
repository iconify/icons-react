import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af9gyabim.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af9gyabim"/>`,
		"fallback": "thesvg-color:windows8",
	});
}

export default Component;
