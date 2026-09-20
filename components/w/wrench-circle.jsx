import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/bsh15bben.css';
import '../../css/x/xsp8v5bie.css';
import '../../css/n/nfm8l-yni.css';
import '../../css/v/vp_u-eb9g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="bsh15bben"/><path class="xsp8v5bie"/><path class="nfm8l-yni"/><path class="vp_u-eb9g"/></g>`,
		"fallback": "streamline-plump-color:wrench-circle",
	});
}

export default Component;
