import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qqp41ub-t.css';
import '../../css/s/s9a8n3bio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qqp41ub-t"/><path class="s9a8n3bio"/></g>`,
		"fallback": "thesvg:yuanbao",
	});
}

export default Component;
