import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5ike-bql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5ike-bql"/>`,
		"fallback": "thesvg-color:wondershare-filmora",
	});
}

export default Component;
