import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svzk-5qxf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svzk-5qxf"/>`,
		"fallback": "fa7-brands:wizards-of-the-coast",
	});
}

export default Component;
