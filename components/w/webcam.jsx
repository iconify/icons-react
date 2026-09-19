import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/q/qhcun_l9h.css';
import '../../css/d/d4_2msbzg.css';
import '../../css/q/q3w-2jpjr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="qhcun_l9h"/><path class="d4_2msbzg"/><path class="q3w-2jpjr"/></g>`,
		"fallback": "icon-park-outline:webcam",
	});
}

export default Component;
