import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu7c63bqu.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tu7c63bqu"/>`,
		"fallback": "f7:xmark-rectangle",
	});
}

export default Component;
