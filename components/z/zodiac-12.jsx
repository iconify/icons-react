import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5qtugxag.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5qtugxag"/>`,
		"fallback": "streamline-color:zodiac-12",
	});
}

export default Component;
