import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljn0qppoh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljn0qppoh"/>`,
		"fallback": "fa6-solid:wheat-awn",
	});
}

export default Component;
