import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nky2nab7l.css';
import '../../css/t/t0669_bln.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nky2nab7l"/><path class="t0669_bln"/>`,
		"fallback": "heroicons:wrench-screwdriver-16-solid",
	});
}

export default Component;
