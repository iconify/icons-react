import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/p/prwsw9-4e.css';
import '../../css/z/zrg4asb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="prwsw9-4e"/><path class="zrg4asb8b"/></g>`,
		"fallback": "streamline-logos:zcool-logo-2",
	});
}

export default Component;
