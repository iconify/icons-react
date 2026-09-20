import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr7f7hb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr7f7hb4i"/>`,
		"fallback": "uil:window-maximize",
	});
}

export default Component;
