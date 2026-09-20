import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg0-wsbaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg0-wsbaj"/>`,
		"fallback": "thesvg-color:yoast",
	});
}

export default Component;
