import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_w6ecbck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_w6ecbck"/>`,
		"fallback": "heroicons-outline:wrench-screwdriver",
	});
}

export default Component;
