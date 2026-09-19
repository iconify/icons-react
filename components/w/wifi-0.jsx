import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l97nb-quh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="l97nb-quh"/>`,
		"fallback": "bx:wifi-0",
	});
}

export default Component;
