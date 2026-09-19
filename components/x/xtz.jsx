import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yx82nj_xn.css';
import '../../css/y/yhc01_d5w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="yx82nj_xn"/><path class="yhc01_d5w"/></g>`,
		"fallback": "cryptocurrency-color:xtz",
	});
}

export default Component;
