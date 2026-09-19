import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-lno9bif.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-lno9bif"/>`,
		"fallback": "heroicons:x-mark-20-solid",
	});
}

export default Component;
