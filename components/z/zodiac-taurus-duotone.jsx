import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h001g9p5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h001g9p5s primary"/>`,
		"fallback": "iconaut:zodiac-taurus-duotone",
	});
}

export default Component;
