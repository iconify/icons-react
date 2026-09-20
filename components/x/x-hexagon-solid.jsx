import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql0u9ebcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql0u9ebcn"/>`,
		"fallback": "mynaui:x-hexagon-solid",
	});
}

export default Component;
