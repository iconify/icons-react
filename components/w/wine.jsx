import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm9h6ul1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm9h6ul1y"/>`,
		"fallback": "noviair-light:wine",
	});
}

export default Component;
