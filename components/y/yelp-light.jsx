import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovgt16bgd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovgt16bgd"/>`,
		"fallback": "selfhst:yelp-light",
	});
}

export default Component;
