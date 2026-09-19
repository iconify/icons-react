import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl6gumbna.css';

const viewBox = {"width":1792,"height":1472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl6gumbna"/>`,
		"fallback": "fa:weibo",
	});
}

export default Component;
