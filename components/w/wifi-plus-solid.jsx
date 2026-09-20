import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9h3zfb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9h3zfb0e"/>`,
		"fallback": "mynaui:wifi-plus-solid",
	});
}

export default Component;
