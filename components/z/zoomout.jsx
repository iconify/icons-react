import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mav5rmb1c.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mav5rmb1c"/>`,
		"fallback": "whh:zoomout",
	});
}

export default Component;
