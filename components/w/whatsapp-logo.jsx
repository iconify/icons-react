import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zeoh9dbgl.css';
import '../../css/c/ck9o18b5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="zeoh9dbgl"/><path class="ck9o18b5b"/></g>`,
		"fallback": "streamline-logos:whatsapp-logo",
	});
}

export default Component;
