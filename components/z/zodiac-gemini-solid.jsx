import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7jaf7bps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7jaf7bps"/>`,
		"fallback": "iconaut:zodiac-gemini-solid",
	});
}

export default Component;
