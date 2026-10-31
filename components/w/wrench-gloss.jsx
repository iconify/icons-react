import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0mc-1bju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0mc-1bju"/>`,
		"fallback": "withicons:wrench-gloss",
	});
}

export default Component;
