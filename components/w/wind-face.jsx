import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkw-acq1l.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/z/zg-4--vku.css';
import '../../css/a/a2wbsbc0p.css';
import '../../css/o/oqr0tl9mz.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkw-acq1l"/><g class="rpvb-o6bq"><path class="zg-4--vku"/><path class="a2wbsbc0p"/><path class="oqr0tl9mz"/></g>`,
		"fallback": "openmoji:wind-face",
	});
}

export default Component;
