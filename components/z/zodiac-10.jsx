import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2ivbwb4s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2ivbwb4s"/>`,
		"fallback": "streamline-color:zodiac-10",
	});
}

export default Component;
