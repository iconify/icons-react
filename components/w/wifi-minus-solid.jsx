import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmbg79_il.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmbg79_il"/>`,
		"fallback": "mynaui:wifi-minus-solid",
	});
}

export default Component;
