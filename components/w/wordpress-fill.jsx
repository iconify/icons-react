import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzyl80b9u.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzyl80b9u"/>`,
		"fallback": "lineicons:wordpress-fill",
	});
}

export default Component;
