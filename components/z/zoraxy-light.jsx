import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei45d4g-v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei45d4g-v"/>`,
		"fallback": "selfhst:zoraxy-light",
	});
}

export default Component;
