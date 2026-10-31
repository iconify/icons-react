import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cjdo5xbkk.css';
import '../../css/x/xz5kyqywx.css';
import '../../css/m/mjnbjcb2r.css';
import '../../css/s/srwtuibgi.css';
import '../../css/p/p16ta_b_b.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cjdo5xbkk wm-shadow"/><path class="xz5kyqywx"/><path class="mjnbjcb2r"/><path class="srwtuibgi"/><path class="p16ta_b_b"/><path class="v0eyaibau wm-s"/></g>`,
		"fallback": "withicons-retro:wifi-off",
	});
}

export default Component;
