import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j6jrnbdmx.css';
import '../../css/f/fft4yz3uq.css';
import '../../css/q/q-ome_08g.css';
import '../../css/d/dg2drhi8k.css';
import '../../css/a/auv6lqb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="j6jrnbdmx"/><path class="fft4yz3uq wm-a"/><path class="q-ome_08g"/><path class="dg2drhi8k"/><path class="auv6lqb6w"/></g>`,
		"fallback": "withicons:webhook-duo",
	});
}

export default Component;
