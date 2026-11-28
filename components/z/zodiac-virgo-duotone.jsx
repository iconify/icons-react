import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4ic-hblq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary q4ic-hblq"/>`,
		"fallback": "iconaut:zodiac-virgo-duotone",
	});
}

export default Component;
