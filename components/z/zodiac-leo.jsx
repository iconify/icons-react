import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u72a_0bdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u72a_0bdq"/>`,
		"fallback": "mdi:zodiac-leo",
	});
}

export default Component;
