import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-i6ib76y.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-i6ib76y"/>`,
		"fallback": "garden:wrap-right-stroke-12",
	});
}

export default Component;
