import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co3jv6bkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co3jv6bkd"/>`,
		"fallback": "thesvg-color:webex",
	});
}

export default Component;
