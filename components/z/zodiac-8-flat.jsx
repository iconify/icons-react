import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1t6ehbro.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s1t6ehbro"/>`,
		"fallback": "streamline-color:zodiac-8-flat",
	});
}

export default Component;
