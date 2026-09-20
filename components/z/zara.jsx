import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re7s0bcpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re7s0bcpw"/>`,
		"fallback": "simple-icons:zara",
	});
}

export default Component;
