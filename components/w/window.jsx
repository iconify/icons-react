import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uay-fybip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uay-fybip"/>`,
		"fallback": "noviair-light:window",
	});
}

export default Component;
