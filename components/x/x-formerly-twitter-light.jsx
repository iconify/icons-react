import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2z8qxnta.css';

const viewBox = {"width":1200,"height":1227};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2z8qxnta"/>`,
		"fallback": "thesvg-color:x-formerly-twitter-light",
	});
}

export default Component;
