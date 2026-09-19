import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am18m6ban.css';

const viewBox = {"width":768,"height":1026};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am18m6ban"/>`,
		"fallback": "whh:yelp",
	});
}

export default Component;
