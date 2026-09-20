import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zj-kr1y6y.css';
import '../../css/b/bd42t7_nc.css';
import '../../css/x/x4mk1_boj.css';
import '../../css/v/v3i7yu8ev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zj-kr1y6y"/><path class="bd42t7_nc"/><path class="x4mk1_boj"/><path class="v3i7yu8ev"/></g>`,
		"fallback": "streamline-freehand:wireless-wifi-signal-antenna",
	});
}

export default Component;
