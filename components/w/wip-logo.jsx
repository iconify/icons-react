import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/y/ysq-302mm.css';
import '../../css/z/zr06klb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="ysq-302mm"/><path class="zr06klb3n"/></g>`,
		"fallback": "streamline-logos:wip-logo",
	});
}

export default Component;
