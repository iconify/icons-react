import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4u8pbwjc.css';
import '../../css/z/z46cr5nmt.css';
import '../../css/y/yp1e1u17q.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/r/r9sysz75i.css';
import '../../css/q/qnkyr2bgp.css';
import '../../css/v/v8_fesbsg.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="x4u8pbwjc"><path class="z46cr5nmt"/><circle class="yp1e1u17q"/></g><g class="brzn_0bpr"><circle class="r9sysz75i"/><path class="qnkyr2bgp"/><path class="v8_fesbsg"/></g>`,
		"fallback": "openmoji:woman-standing",
	});
}

export default Component;
