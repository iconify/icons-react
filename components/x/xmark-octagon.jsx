import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_cr1bbpf.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_cr1bbpf"/>`,
		"fallback": "f7:xmark-octagon",
	});
}

export default Component;
