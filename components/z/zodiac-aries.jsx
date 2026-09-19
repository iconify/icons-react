import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-_oh8f1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-_oh8f1y"/>`,
		"fallback": "hugeicons:zodiac-aries",
	});
}

export default Component;
