import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/x/xc27zd9-j.css';
import '../../css/q/qwvf_lbrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="xc27zd9-j"/><path class="qwvf_lbrx"/></g>`,
		"fallback": "streamline-ultimate:wrestling-mask-1",
	});
}

export default Component;
