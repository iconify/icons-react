import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxvtyc1ly.css';

const viewBox = {"width":609,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxvtyc1ly"/>`,
		"fallback": "ls:youtube",
	});
}

export default Component;
