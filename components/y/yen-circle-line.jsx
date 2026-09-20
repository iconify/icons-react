import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq3np2bmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq3np2bmo"/>`,
		"fallback": "majesticons:yen-circle-line",
	});
}

export default Component;
