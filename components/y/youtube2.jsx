import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrihrpbok.css';
import '../../css/q/qrptghg4z.css';

const viewBox = {"width":40,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrihrpbok"/><path class="qrptghg4z"/>`,
		"fallback": "icomoon-free:youtube2",
	});
}

export default Component;
