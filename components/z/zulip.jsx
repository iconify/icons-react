import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du3b5d9wg.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du3b5d9wg"/>`,
		"fallback": "fa7-brands:zulip",
	});
}

export default Component;
