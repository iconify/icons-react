import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxr05_b8y.css';

const viewBox = {"width":1200,"height":1227};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxr05_b8y"/>`,
		"fallback": "thesvg-color:x-formerly-twitter-dark",
	});
}

export default Component;
