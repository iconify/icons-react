import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jggravbas.css';
import '../../css/t/tk-bsdb7h.css';
import '../../css/z/zw73qre9l.css';
import '../../css/c/cr6i6db2q.css';
import '../../css/o/ogipbxbsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jggravbas"/><path class="tk-bsdb7h"/><rect class="zw73qre9l"/><path class="cr6i6db2q"/><rect transform="matrix(0 -1 -1 0 22.39 19.71)" class="ogipbxbsj"/></g>`,
		"fallback": "andrsrxn:wifi-lock",
	});
}

export default Component;
