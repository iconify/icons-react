import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jhq6xabtd.css';
import '../../css/z/zz0g-cc0d.css';
import '../../css/c/cbw1ke_rt.css';
import '../../css/k/k-pnqznjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jhq6xabtd"/><path class="zz0g-cc0d"/><path class="cbw1ke_rt"/><path class="k-pnqznjx"/></g>`,
		"fallback": "hugeicons:webhook",
	});
}

export default Component;
