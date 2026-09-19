import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvwio-8xu.css';

const viewBox = {"width":645,"height":751};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvwio-8xu"/>`,
		"fallback": "ls:yelp",
	});
}

export default Component;
