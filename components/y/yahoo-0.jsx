import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnioaab0p.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnioaab0p"/>`,
		"fallback": "wi:yahoo-0",
	});
}

export default Component;
