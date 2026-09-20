import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jusq19xev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jusq19xev"/>`,
		"fallback": "tabler:writing-filled",
	});
}

export default Component;
