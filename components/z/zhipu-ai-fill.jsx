import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-0r4r-3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-0r4r-3o"/>`,
		"fallback": "ri:zhipu-ai-fill",
	});
}

export default Component;
