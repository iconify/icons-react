import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwe4--b9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwe4--b9u"/>`,
		"fallback": "mdi:windows-classic",
	});
}

export default Component;
