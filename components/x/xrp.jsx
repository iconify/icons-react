import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycpa7yb_p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycpa7yb_p"/>`,
		"fallback": "cryptocurrency:xrp",
	});
}

export default Component;
