import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw8wwbnil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jw8wwbnil"/>`,
		"fallback": "iconaut:wine-solid",
	});
}

export default Component;
