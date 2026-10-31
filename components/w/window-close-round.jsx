import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uacl0ig0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uacl0ig0k"/>`,
		"fallback": "coolicons:window-close-round",
	});
}

export default Component;
