import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcr9c3bkn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcr9c3bkn"/>`,
		"fallback": "selfhst:yeetfile",
	});
}

export default Component;
