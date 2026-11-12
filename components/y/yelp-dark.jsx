import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-efk4bmb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-efk4bmb"/>`,
		"fallback": "selfhst:yelp-dark",
	});
}

export default Component;
