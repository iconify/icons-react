import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb34e1b0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb34e1b0d"/>`,
		"fallback": "si:wrench-fill",
	});
}

export default Component;
