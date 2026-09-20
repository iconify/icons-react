import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zeha0ebuo.css';
import '../../css/u/uc-v4pb8z.css';
import '../../css/k/ku4eu0m6p.css';
import '../../css/q/qksz56pwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zeha0ebuo"/><path class="uc-v4pb8z"/><path class="ku4eu0m6p"/><path class="qksz56pwd"/></g>`,
		"fallback": "solar:widget-6-linear",
	});
}

export default Component;
