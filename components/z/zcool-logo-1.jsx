import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zrg4asb8b.css';
import '../../css/v/v6azvo1mp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="zrg4asb8b"/><path class="v6azvo1mp"/></g>`,
		"fallback": "streamline-logos:zcool-logo-1",
	});
}

export default Component;
