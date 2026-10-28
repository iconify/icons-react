import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bk-76j6vn.css';
import '../../css/g/gd5nj5bhu.css';
import '../../css/h/hg3854btu.css';
import '../../css/t/tip4_vb7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bk-76j6vn"/><rect class="gd5nj5bhu"/><rect class="hg3854btu"/><path class="tip4_vb7a"/></g>`,
		"fallback": "andrsrxn:workflow-check",
	});
}

export default Component;
