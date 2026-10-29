import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xj1-90b6z.css';
import '../../css/s/sob6b3b5g.css';
import '../../css/f/fvqdqgblh.css';
import '../../css/o/o9mr9xb2h.css';
import '../../css/p/pqj7dyb7e.css';
import '../../css/t/t5wcg-6rz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco xj1-90b6z"/><path class="sob6b3b5g wm-deco"/><path class="fvqdqgblh wm-deco"/><path class="o9mr9xb2h wm-k"/><path class="pqj7dyb7e wm-a"/><path class="t5wcg-6rz wm-k"/></g>`,
		"fallback": "withicons:wreath-blueprint",
	});
}

export default Component;
