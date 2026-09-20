import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe8i44bza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe8i44bza"/>`,
		"fallback": "mdi:zend",
	});
}

export default Component;
