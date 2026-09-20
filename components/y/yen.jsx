import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e79hwtb2e.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e79hwtb2e"/>`,
		"fallback": "lineicons:yen",
	});
}

export default Component;
