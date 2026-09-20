import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x4zmh5bfn.css';
import '../../css/k/krydz_bms.css';
import '../../css/m/msqmn_bst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x4zmh5bfn"/><path class="krydz_bms"/><path class="msqmn_bst"/></g>`,
		"fallback": "tdesign:window-1",
	});
}

export default Component;
