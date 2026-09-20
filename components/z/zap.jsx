import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny7g-0bqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny7g-0bqj"/>`,
		"fallback": "pixelarticons:zap",
	});
}

export default Component;
