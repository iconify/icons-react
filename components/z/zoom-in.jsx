import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs_qh73eq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs_qh73eq"/>`,
		"fallback": "heroicons-outline:zoom-in",
	});
}

export default Component;
