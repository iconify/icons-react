import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jjq2qh_fp.css';
import '../../css/h/hwifnpb2v.css';
import '../../css/j/jaylt9jhp.css';
import '../../css/q/quzsnqbup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jjq2qh_fp"/><path class="hwifnpb2v"/><path class="jaylt9jhp"/><path class="quzsnqbup"/></g>`,
		"fallback": "solar:weigher-line-duotone",
	});
}

export default Component;
