import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1zrjmb8r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1zrjmb8r"/>`,
		"fallback": "streamline:zero-hunger",
	});
}

export default Component;
