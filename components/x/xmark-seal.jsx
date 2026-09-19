import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zin4mvb-r.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zin4mvb-r"/>`,
		"fallback": "f7:xmark-seal",
	});
}

export default Component;
