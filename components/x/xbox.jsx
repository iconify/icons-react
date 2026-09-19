import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwx98lbnh.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwx98lbnh"/>`,
		"fallback": "zmdi:xbox",
	});
}

export default Component;
