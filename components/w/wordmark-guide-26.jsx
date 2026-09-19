import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2nqp7efb.css';

const viewBox = {"width":57,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2nqp7efb"/>`,
		"fallback": "garden:wordmark-guide-26",
	});
}

export default Component;
