import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqb1rcbmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqb1rcbmy"/>`,
		"fallback": "token:xchf",
	});
}

export default Component;
