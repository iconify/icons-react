import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzycj6brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzycj6brf"/>`,
		"fallback": "noviair-light:wifi-off",
	});
}

export default Component;
