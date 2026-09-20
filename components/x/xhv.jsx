import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igmuzf3vd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igmuzf3vd"/>`,
		"fallback": "token:xhv",
	});
}

export default Component;
