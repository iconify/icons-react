import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlacyr9-z.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlacyr9-z"/>`,
		"fallback": "fa6-solid:z",
	});
}

export default Component;
