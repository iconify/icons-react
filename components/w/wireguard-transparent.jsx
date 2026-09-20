import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tiikn06-w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tiikn06-w"/>`,
		"fallback": "selfhst:wireguard-transparent",
	});
}

export default Component;
