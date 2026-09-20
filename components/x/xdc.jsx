import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds7t43jyo.css';
import '../../css/e/e3ss8accz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds7t43jyo"/><path class="e3ss8accz"/>`,
		"fallback": "token:xdc",
	});
}

export default Component;
