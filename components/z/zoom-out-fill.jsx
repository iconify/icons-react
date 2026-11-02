import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw8x8r-ex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw8x8r-ex"/>`,
		"fallback": "mingcute:zoom-out-fill",
	});
}

export default Component;
