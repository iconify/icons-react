import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmb40b8ah.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmb40b8ah"/>`,
		"fallback": "f7:xmark-seal-fill",
	});
}

export default Component;
