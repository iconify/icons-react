import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzl8ltb4v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzl8ltb4v"/>`,
		"fallback": "selfhst:xibo-dark",
	});
}

export default Component;
