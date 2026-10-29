import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n2seesb2k.css';
import '../../css/m/me7ikqasy.css';
import '../../css/i/ijjqzgbev.css';
import '../../css/q/q-ome_08g.css';
import '../../css/d/dg2drhi8k.css';
import '../../css/a/auv6lqb6w.css';
import '../../css/f/fft4yz3uq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="n2seesb2k wm-k"/><path class="me7ikqasy wm-a"/><path class="ijjqzgbev wm-shadow"/><path class="q-ome_08g wm-k"/><path class="dg2drhi8k wm-k"/><path class="auv6lqb6w wm-k"/><path class="fft4yz3uq wm-a"/></g>`,
		"fallback": "withicons:webhook-engrave",
	});
}

export default Component;
