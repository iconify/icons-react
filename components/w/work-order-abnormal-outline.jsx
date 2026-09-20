import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg-4g4b3z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg-4g4b3z"/>`,
		"fallback": "lsicon:work-order-abnormal-outline",
	});
}

export default Component;
