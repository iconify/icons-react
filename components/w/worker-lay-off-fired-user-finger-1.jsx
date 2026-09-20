import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2zg9ebee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j2zg9ebee"/>`,
		"fallback": "streamline-freehand:worker-lay-off-fired-user-finger-1",
	});
}

export default Component;
