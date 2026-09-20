import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_-jczb_q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h_-jczb_q"/>`,
		"fallback": "streamline-color:zodiac-5-flat",
	});
}

export default Component;
