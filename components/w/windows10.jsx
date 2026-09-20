import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcctsk5am.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcctsk5am"/>`,
		"fallback": "simple-icons:windows10",
	});
}

export default Component;
