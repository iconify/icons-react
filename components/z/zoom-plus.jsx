import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yredabc2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yredabc2q"/>`,
		"fallback": "fontisto:zoom-plus",
	});
}

export default Component;
