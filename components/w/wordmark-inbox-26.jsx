import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8yrp8bih.css';

const viewBox = {"width":56,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8yrp8bih"/>`,
		"fallback": "garden:wordmark-inbox-26",
	});
}

export default Component;
