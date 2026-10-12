import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bi7_v14dm.css';
import '../../css/o/o459tvs9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bi7_v14dm"/><path class="o459tvs9l"/></g>`,
		"fallback": "andrsrxn:wine",
	});
}

export default Component;
