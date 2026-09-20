import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t818vw59i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t818vw59i"/>`,
		"fallback": "mdi:window-open",
	});
}

export default Component;
