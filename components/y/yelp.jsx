import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulatbobti.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulatbobti"/>`,
		"fallback": "fa-brands:yelp",
	});
}

export default Component;
