import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llbqrh8ag.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llbqrh8ag"/>`,
		"fallback": "fa-solid:wifi",
	});
}

export default Component;
