import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bimb9pjdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bimb9pjdt"/>`,
		"fallback": "hugeicons:weight",
	});
}

export default Component;
