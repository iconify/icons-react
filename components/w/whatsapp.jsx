import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh65xfb2b.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh65xfb2b"/>`,
		"fallback": "fa7-brands:whatsapp",
	});
}

export default Component;
