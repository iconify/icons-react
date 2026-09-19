import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/p/p-96z3bpw.css';
import '../../css/j/jt4c39h5v.css';
import '../../css/u/u4turoboe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="p-96z3bpw"/><path class="jt4c39h5v"/><path class="u4turoboe"/></g>`,
		"fallback": "icon-park:woman",
	});
}

export default Component;
