import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yndpv1bzf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yndpv1bzf"/>`,
		"fallback": "pinhead:wisconsin-with-capital-star",
	});
}

export default Component;
