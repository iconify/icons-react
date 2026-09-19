import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en-_y_-fq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en-_y_-fq"/>`,
		"fallback": "bxs:x-square",
	});
}

export default Component;
