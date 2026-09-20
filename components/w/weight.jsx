import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em2nqve8q.css';
import '../../css/n/n5k9wlmuu.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em2nqve8q"/><path class="n5k9wlmuu"/>`,
		"fallback": "lineicons:weight",
	});
}

export default Component;
