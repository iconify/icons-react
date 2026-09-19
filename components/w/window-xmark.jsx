import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w3ffthboy.css';
import '../../css/z/zjuncabki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="w3ffthboy"/><path class="zjuncabki"/></g>`,
		"fallback": "iconoir:window-xmark",
	});
}

export default Component;
