import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb9r1gbwp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb9r1gbwp"/>`,
		"fallback": "selfhst:xpipe-light",
	});
}

export default Component;
