import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5rmaob2y.css';

const viewBox = {"width":288,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5rmaob2y"/>`,
		"fallback": "fa-solid:wine-glass-alt",
	});
}

export default Component;
