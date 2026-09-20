import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhr29gb-l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhr29gb-l"/>`,
		"fallback": "selfhst:zerotier-dark",
	});
}

export default Component;
