import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq2i94jsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq2i94jsu"/>`,
		"fallback": "mdi:wheel-barrow",
	});
}

export default Component;
