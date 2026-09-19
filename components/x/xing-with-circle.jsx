import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq3nws7ve.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq3nws7ve"/>`,
		"fallback": "entypo-social:xing-with-circle",
	});
}

export default Component;
