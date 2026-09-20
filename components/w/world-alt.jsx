import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj2ntd1ke.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj2ntd1ke"/>`,
		"fallback": "lineicons:world-alt",
	});
}

export default Component;
