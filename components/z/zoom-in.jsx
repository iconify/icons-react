import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd6863zjh.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd6863zjh"/>`,
		"fallback": "map:zoom-in",
	});
}

export default Component;
