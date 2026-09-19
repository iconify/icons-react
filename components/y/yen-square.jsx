import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xvj31lbcb.css';
import '../../css/r/r-f9yjp0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xvj31lbcb"/><path class="r-f9yjp0n"/></g>`,
		"fallback": "hugeicons:yen-square",
	});
}

export default Component;
