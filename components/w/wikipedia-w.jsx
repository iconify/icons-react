import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybhhwn4il.css';

const viewBox = {"width":2304,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybhhwn4il"/>`,
		"fallback": "fa:wikipedia-w",
	});
}

export default Component;
