import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zof0eccfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zof0eccfi"/>`,
		"fallback": "circum:zoom-in",
	});
}

export default Component;
