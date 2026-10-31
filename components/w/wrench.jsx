import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/suc50roas.css';
import '../../css/c/csuq12b_r.css';
import '../../css/i/i_ko-0b3r.css';
import '../../css/k/kotscnq9b.css';
import '../../css/w/wy41uxbne.css';
import '../../css/l/lw79y1bjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="suc50roas wm-shadow"/><path class="csuq12b_r"/><path class="i_ko-0b3r"/><path class="kotscnq9b"/><path class="wy41uxbne"/><path class="lw79y1bjd"/></g>`,
		"fallback": "withicons-retro:wrench",
	});
}

export default Component;
