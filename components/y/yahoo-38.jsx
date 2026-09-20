import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h13vezb6c.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h13vezb6c"/>`,
		"fallback": "wi:yahoo-38",
	});
}

export default Component;
