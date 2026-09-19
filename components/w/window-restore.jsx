import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8l-_n20z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8l-_n20z"/>`,
		"fallback": "fa-regular:window-restore",
	});
}

export default Component;
