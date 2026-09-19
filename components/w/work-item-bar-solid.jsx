import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0kmr-bai.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0kmr-bai"/>`,
		"fallback": "fluent-mdl2:work-item-bar-solid",
	});
}

export default Component;
