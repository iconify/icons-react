import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4x_l744s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4x_l744s"/>`,
		"fallback": "thesvg-color:zingat",
	});
}

export default Component;
