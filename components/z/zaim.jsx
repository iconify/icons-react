import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oskty9h7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oskty9h7o"/>`,
		"fallback": "thesvg-color:zaim",
	});
}

export default Component;
