import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg7smxi4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg7smxi4v"/>`,
		"fallback": "hugeicons:zip-01",
	});
}

export default Component;
