import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx9rzpk0k.css';

const viewBox = {"width":24,"height":24,"left":-1,"top":-1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx9rzpk0k"/>`,
		"fallback": "jam:wrench",
	});
}

export default Component;
