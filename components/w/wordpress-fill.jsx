import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn9-qb38y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qn9-qb38y"/>`,
		"fallback": "ri:wordpress-fill",
	});
}

export default Component;
