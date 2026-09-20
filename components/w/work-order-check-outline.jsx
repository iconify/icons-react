import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3qj_ibrz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3qj_ibrz"/>`,
		"fallback": "lsicon:work-order-check-outline",
	});
}

export default Component;
