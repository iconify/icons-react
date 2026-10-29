import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vykcu8zym.css';
import '../../css/d/d9mq_e1hk.css';
import '../../css/d/dtw-1xbtj.css';
import '../../css/k/k36npzb2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vykcu8zym wm-k"/><path class="d9mq_e1hk wm-k"/><path class="dtw-1xbtj wm-k"/><path class="k36npzb2j wm-shine"/></g>`,
		"fallback": "withicons-anime:wifi",
	});
}

export default Component;
