import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9u_4xbqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9u_4xbqy"/>`,
		"fallback": "iconaut:wheat-solid",
	});
}

export default Component;
