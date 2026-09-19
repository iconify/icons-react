import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgb-6724v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgb-6724v"/>`,
		"fallback": "entypo-social:yelp",
	});
}

export default Component;
