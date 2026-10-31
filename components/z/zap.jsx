import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/plq3ytd1t.css';
import '../../css/d/dr-cx4b-t.css';
import '../../css/i/imxon7blq.css';
import '../../css/c/cw33zfbku.css';
import '../../css/m/mh0dx6lba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="plq3ytd1t wm-shadow"/><path class="dr-cx4b-t"/><path class="imxon7blq"/><path class="cw33zfbku"/><path class="mh0dx6lba"/></g>`,
		"fallback": "withicons-retro:zap",
	});
}

export default Component;
