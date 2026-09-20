import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0kewvb1t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j0kewvb1t"/>`,
		"fallback": "streamline-color:zodiac-11-flat",
	});
}

export default Component;
