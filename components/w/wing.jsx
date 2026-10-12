import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dt923ym2f.css';
import '../../css/z/znje9cb0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dt923ym2f"/><path class="znje9cb0j"/></g>`,
		"fallback": "andrsrxn:wing",
	});
}

export default Component;
