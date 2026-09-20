import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku08pxx9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku08pxx9s"/>`,
		"fallback": "mi:window",
	});
}

export default Component;
