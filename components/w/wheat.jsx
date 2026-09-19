import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxq73bs4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxq73bs4k"/>`,
		"fallback": "hugeicons:wheat",
	});
}

export default Component;
