import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy735dk7u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy735dk7u"/>`,
		"fallback": "fa6-solid:whiskey-glass",
	});
}

export default Component;
