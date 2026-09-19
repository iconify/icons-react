import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7i5xtbur.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7i5xtbur"/>`,
		"fallback": "fa7-brands:x-twitter",
	});
}

export default Component;
