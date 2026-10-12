import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/velw-ed5r.css';
import '../../css/b/b83fj5brz.css';
import '../../css/l/lz_07f6az.css';
import '../../css/u/uxjcl4ryp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="velw-ed5r"/><path class="b83fj5brz"/><circle class="lz_07f6az"/><path class="uxjcl4ryp"/></g>`,
		"fallback": "andrsrxn:weight",
	});
}

export default Component;
