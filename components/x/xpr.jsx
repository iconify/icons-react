import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xdurq9vdm.css';
import '../../css/s/swbiljbjf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="xdurq9vdm"/><path class="swbiljbjf"/></g>`,
		"fallback": "cryptocurrency-color:xpr",
	});
}

export default Component;
