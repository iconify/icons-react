import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8y2vtl5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8y2vtl5i"/>`,
		"fallback": "noviair-light:wifi-alert",
	});
}

export default Component;
