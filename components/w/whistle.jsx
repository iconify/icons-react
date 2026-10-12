import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ud52wt7ld.css';
import '../../css/x/xdhs1acgm.css';
import '../../css/f/fqt1u17_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ud52wt7ld"/><path class="xdhs1acgm"/><path class="fqt1u17_m"/></g>`,
		"fallback": "andrsrxn:whistle",
	});
}

export default Component;
