import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn14cjvwn.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn14cjvwn"/>`,
		"fallback": "wi:yahoo-43",
	});
}

export default Component;
