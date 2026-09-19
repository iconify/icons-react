import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2cjmpb1l.css';

const viewBox = {"width":109,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2cjmpb1l"/>`,
		"fallback": "garden:wordmark-messaging-26",
	});
}

export default Component;
