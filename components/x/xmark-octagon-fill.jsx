import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0-onzpmo.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0-onzpmo"/>`,
		"fallback": "f7:xmark-octagon-fill",
	});
}

export default Component;
