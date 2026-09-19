import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug51cgjtq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug51cgjtq"/>`,
		"fallback": "fa-regular:window-minimize",
	});
}

export default Component;
