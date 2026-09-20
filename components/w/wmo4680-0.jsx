import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f25ju-b2q.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f25ju-b2q"/>`,
		"fallback": "wi:wmo4680-0",
	});
}

export default Component;
