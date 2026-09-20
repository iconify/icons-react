import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi0e_db3y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi0e_db3y"/>`,
		"fallback": "la:wine-glass-solid",
	});
}

export default Component;
