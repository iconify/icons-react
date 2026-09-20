import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlkje40co.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlkje40co"/>`,
		"fallback": "ri:wheelchair-fill",
	});
}

export default Component;
