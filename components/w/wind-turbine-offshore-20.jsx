import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqnj4_bfn.css';
import '../../css/i/icilmibae.css';
import '../../css/p/p6ao6xbkt.css';
import '../../css/j/jecgocc5k.css';
import '../../css/q/qxb8801ju.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqnj4_bfn"/><path class="icilmibae"/><path class="p6ao6xbkt"/><path class="jecgocc5k"/><path class="qxb8801ju"/>`,
		"fallback": "energy-icons:wind-turbine-offshore-20",
	});
}

export default Component;
