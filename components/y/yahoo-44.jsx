import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mro705bga.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mro705bga"/>`,
		"fallback": "wi:yahoo-44",
	});
}

export default Component;
