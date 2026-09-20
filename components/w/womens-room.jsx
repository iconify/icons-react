import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrks0fbpf.css';
import '../../css/n/n2s-1rb_z.css';
import '../../css/l/ll-8lcbxu.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/o/o8zgjdr1z.css';
import '../../css/u/uh2dj5uji.css';
import '../../css/n/ntaq40bds.css';
import '../../css/q/qjtn_dbax.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrks0fbpf"/><path class="n2s-1rb_z"/><circle class="ll-8lcbxu"/><g class="brzn_0bpr"><circle class="o8zgjdr1z"/><path class="uh2dj5uji"/><path class="ntaq40bds"/><path class="qjtn_dbax"/></g>`,
		"fallback": "openmoji:womens-room",
	});
}

export default Component;
