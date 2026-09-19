import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r87ynzzcg.css';

const viewBox = {"width":548,"height":735};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r87ynzzcg"/>`,
		"fallback": "ls:x-upper-case",
	});
}

export default Component;
