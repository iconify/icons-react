import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iec_14b8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iec_14b8y"/>`,
		"fallback": "noviair-light:webcam",
	});
}

export default Component;
