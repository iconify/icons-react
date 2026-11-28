import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgv_cbb9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgv_cbb9u"/>`,
		"fallback": "noviair-light:wheat",
	});
}

export default Component;
