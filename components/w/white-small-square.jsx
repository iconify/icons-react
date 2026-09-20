import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbxb9zycx.css';
import '../../css/u/uu386rb8h.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbxb9zycx"/><path class="uu386rb8h"/>`,
		"fallback": "openmoji:white-small-square",
	});
}

export default Component;
