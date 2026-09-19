import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk-9l5boc.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk-9l5boc"/>`,
		"fallback": "fa-solid:yen-sign",
	});
}

export default Component;
