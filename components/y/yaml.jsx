import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3jp7-bji.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3jp7-bji"/>`,
		"fallback": "devicon-plain:yaml",
	});
}

export default Component;
