import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivkxfbb3l.css';
import '../../css/q/qmvfbubxl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivkxfbb3l"/><path class="qmvfbubxl"/>`,
		"fallback": "carbon:zoom-out-area",
	});
}

export default Component;
