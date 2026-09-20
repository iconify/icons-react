import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip3d1v6sl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ip3d1v6sl"/>`,
		"fallback": "lsicon:work-order-check-filled",
	});
}

export default Component;
