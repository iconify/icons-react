import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjfq8ra2c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjfq8ra2c"/>`,
		"fallback": "selfhst:z-wave-dark",
	});
}

export default Component;
