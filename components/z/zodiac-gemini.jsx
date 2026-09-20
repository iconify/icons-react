import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmob1ccvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmob1ccvi"/>`,
		"fallback": "mdi:zodiac-gemini",
	});
}

export default Component;
