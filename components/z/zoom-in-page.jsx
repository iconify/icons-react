import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rhwu-ob_j.css';
import '../../css/b/b0px3ts2v.css';
import '../../css/d/dg-xcybwq.css';
import '../../css/x/xuqei-mrd.css';
import '../../css/b/bluwvfb0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rhwu-ob_j"/><path class="b0px3ts2v"/><path class="dg-xcybwq"/><path class="xuqei-mrd"/><path class="bluwvfb0r"/></g>`,
		"fallback": "streamline-ultimate-color:zoom-in-page",
	});
}

export default Component;
