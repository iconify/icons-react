import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbl-9e6zb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbl-9e6zb"/>`,
		"fallback": "mage:zoom-in-fill",
	});
}

export default Component;
