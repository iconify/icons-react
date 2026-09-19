import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v79c05byr.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v79c05byr"/>`,
		"fallback": "fa6-brands:wikipedia-w",
	});
}

export default Component;
