import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q55-hx4eu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q55-hx4eu"/>`,
		"fallback": "mdi:zodiac-libra",
	});
}

export default Component;
