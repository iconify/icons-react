import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j9cji8llp.css';
import '../../css/r/r01r-3bes.css';
import '../../css/r/r7eg7804v.css';
import '../../css/o/oxhswy3oh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j9cji8llp"/><path class="r01r-3bes"/><path class="r7eg7804v"/><path class="oxhswy3oh"/></g>`,
		"fallback": "solar:widget-5-line-duotone",
	});
}

export default Component;
