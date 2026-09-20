import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhqjbnb1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhqjbnb1o"/>`,
		"fallback": "thesvg-color:yelp",
	});
}

export default Component;
