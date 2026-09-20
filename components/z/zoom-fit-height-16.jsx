import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh2dsobkx.css';
import '../../css/q/q0q8vklqr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sh2dsobkx"/><path class="q0q8vklqr"/>`,
		"fallback": "qlementine-icons:zoom-fit-height-16",
	});
}

export default Component;
