import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/k/kt212k15j.css';
import '../../css/d/d8k53yv7i.css';
import '../../css/v/v76_p_ksy.css';
import '../../css/q/qf7wliomw.css';
import '../../css/p/p4886vfgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="kt212k15j"/><path class="d8k53yv7i"/><path class="v76_p_ksy"/><path class="qf7wliomw"/><path class="p4886vfgf"/></g>`,
		"fallback": "withicons-retro:wink",
	});
}

export default Component;
