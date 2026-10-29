import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2e5n0siw.css';
import '../../css/w/wh-ocx65v.css';
import '../../css/s/sfovvrdcy.css';
import '../../css/e/eev5m8c_b.css';
import '../../css/n/nlg_1bbdi.css';
import '../../css/q/qoncggexj.css';
import '../../css/z/z_500r6vu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2e5n0siw wm-shadow"/><path class="wh-ocx65v"/><path class="sfovvrdcy"/><path class="eev5m8c_b"/><path class="nlg_1bbdi"/><path class="qoncggexj wm-shine"/><path class="z_500r6vu"/>`,
		"fallback": "withicons-plush:zap",
	});
}

export default Component;
