import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1svveh6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1svveh6h primary"/>`,
		"fallback": "iconaut:zodiac-capricorn-duotone",
	});
}

export default Component;
