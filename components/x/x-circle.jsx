import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f19t8obgt.css';
import '../../css/j/jg_krbcqk.css';
import '../../css/l/l5e9zsbxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(90 12 12)" class="f19t8obgt"/><circle transform="rotate(90 12 12)" class="jg_krbcqk"/><path class="l5e9zsbxo"/></g>`,
		"fallback": "andrsrxn:x-circle",
	});
}

export default Component;
