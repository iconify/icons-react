import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j4kl21b2v.css';
import '../../css/c/ce22cyb5j.css';
import '../../css/s/sqw8o7bkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="j4kl21b2v"/><path class="ce22cyb5j"/><rect class="sqw8o7bkk"/></g>`,
		"fallback": "lucide:workflow",
	});
}

export default Component;
