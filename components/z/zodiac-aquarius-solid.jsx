import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpkulib9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpkulib9t"/>`,
		"fallback": "iconaut:zodiac-aquarius-solid",
	});
}

export default Component;
