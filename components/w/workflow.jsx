import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h-dwiubpd.css';
import '../../css/g/gd5nj5bhu.css';
import '../../css/h/hg3854btu.css';
import '../../css/j/j9ghizibp.css';
import '../../css/v/v0g1yk-0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h-dwiubpd"/><rect class="gd5nj5bhu"/><rect class="hg3854btu"/><circle class="j9ghizibp"/><circle class="v0g1yk-0v"/></g>`,
		"fallback": "andrsrxn:workflow",
	});
}

export default Component;
