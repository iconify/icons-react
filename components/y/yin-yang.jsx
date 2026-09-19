import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuq0kccjt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuq0kccjt"/>`,
		"fallback": "game-icons:yin-yang",
	});
}

export default Component;
