import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onghurb8c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onghurb8c"/>`,
		"fallback": "cib:yelp",
	});
}

export default Component;
