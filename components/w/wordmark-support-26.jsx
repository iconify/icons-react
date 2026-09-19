import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u81g_fbjz.css';

const viewBox = {"width":82,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u81g_fbjz"/>`,
		"fallback": "garden:wordmark-support-26",
	});
}

export default Component;
