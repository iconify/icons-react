import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e13iwsa6s.css';

const viewBox = {"width":48,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e13iwsa6s"/>`,
		"fallback": "garden:wordmark-bold-suite-26",
	});
}

export default Component;
