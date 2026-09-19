import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h-nm03cdu.css';
import '../../css/e/e6env0b5f.css';
import '../../css/h/h-xgp_b_l.css';
import '../../css/k/kd19_zg3g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h-nm03cdu"/><path class="e6env0b5f"/><path class="h-xgp_b_l"/><ellipse transform="rotate(30 23.477 12.594)" class="kd19_zg3g"/></g>`,
		"fallback": "fluent-emoji-flat:white-heart",
	});
}

export default Component;
