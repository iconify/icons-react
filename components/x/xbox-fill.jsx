import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me-eke5in.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="me-eke5in"/>`,
		"fallback": "mingcute:xbox-fill",
	});
}

export default Component;
