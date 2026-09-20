import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd4b6_blw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd4b6_blw"/>`,
		"fallback": "la:xing",
	});
}

export default Component;
