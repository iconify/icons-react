import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qk1k811vr.css';
import '../../css/j/jxqnt6bqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qk1k811vr"/><path class="jxqnt6bqy"/></g>`,
		"fallback": "coolicons:whatsapp-duotone-round",
	});
}

export default Component;
