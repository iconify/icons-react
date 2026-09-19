import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgsnhxbdm.css';

const viewBox = {"width":352,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgsnhxbdm"/>`,
		"fallback": "zmdi:youtube",
	});
}

export default Component;
