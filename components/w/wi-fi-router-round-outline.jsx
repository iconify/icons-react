import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nz1r1-7zw.css';
import '../../css/k/kd9ir2bxz.css';
import '../../css/v/vf2fkdbdj.css';
import '../../css/y/ywug-xbfx.css';
import '../../css/g/g4k3_gmmq.css';
import '../../css/p/p0o6awb_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nz1r1-7zw"/><path clip-rule="evenodd" class="kd9ir2bxz"/><path class="vf2fkdbdj"/><path clip-rule="evenodd" class="ywug-xbfx"/><path class="g4k3_gmmq"/><path class="p0o6awb_m"/></g>`,
		"fallback": "solar:wi-fi-router-round-outline",
	});
}

export default Component;
