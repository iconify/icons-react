import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b4zutccum.css';
import '../../css/y/y681t8b5u.css';
import '../../css/l/lk2buz33l.css';
import '../../css/j/jztu-pbxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b4zutccum"/><path class="y681t8b5u"/><path class="lk2buz33l"/><path class="jztu-pbxt"/></g>`,
		"fallback": "solar:widget-2-line-duotone",
	});
}

export default Component;
