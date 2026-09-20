import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llucre1fe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llucre1fe"/>`,
		"fallback": "streamline-ultimate:wordpress-logo-1-bold",
	});
}

export default Component;
