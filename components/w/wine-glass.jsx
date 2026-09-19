import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr_4ze5bh.css';

const viewBox = {"width":288,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr_4ze5bh"/>`,
		"fallback": "fa-solid:wine-glass",
	});
}

export default Component;
