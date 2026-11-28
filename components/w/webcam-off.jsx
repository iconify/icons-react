import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eajplgf2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eajplgf2c"/>`,
		"fallback": "noviair-light:webcam-off",
	});
}

export default Component;
