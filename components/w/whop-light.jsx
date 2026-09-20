import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_hnosb_e.css';

const viewBox = {"width":383.2,"height":196.4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_hnosb_e"/>`,
		"fallback": "thesvg-color:whop-light",
	});
}

export default Component;
