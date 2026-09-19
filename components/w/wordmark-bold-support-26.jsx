import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce1150bat.css';

const viewBox = {"width":78,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce1150bat"/>`,
		"fallback": "garden:wordmark-bold-support-26",
	});
}

export default Component;
