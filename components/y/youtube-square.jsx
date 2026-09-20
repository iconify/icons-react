import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_ulcowzu.css';
import '../../css/e/en0k_qb_n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_ulcowzu"/><path class="en0k_qb_n"/>`,
		"fallback": "vaadin:youtube-square",
	});
}

export default Component;
