import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezo0bkj3q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezo0bkj3q"/>`,
		"fallback": "icomoon-free:youtube",
	});
}

export default Component;
