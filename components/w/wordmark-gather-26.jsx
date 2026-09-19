import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw1_x9b1z.css';

const viewBox = {"width":69,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw1_x9b1z"/>`,
		"fallback": "garden:wordmark-gather-26",
	});
}

export default Component;
