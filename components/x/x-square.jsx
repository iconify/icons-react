import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocij7pajl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocij7pajl"/>`,
		"fallback": "noviair:x-square",
	});
}

export default Component;
