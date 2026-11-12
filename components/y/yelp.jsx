import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpvhud58c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpvhud58c"/>`,
		"fallback": "selfhst:yelp",
	});
}

export default Component;
