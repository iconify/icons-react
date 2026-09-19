import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-q298pwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-q298pwf"/>`,
		"fallback": "iconamoon:zoom-out-bold",
	});
}

export default Component;
