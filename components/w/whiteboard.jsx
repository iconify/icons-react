import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/f/ft4aq1-ib.css';
import '../../css/c/c3zm8bejl.css';
import '../../css/x/xwy67zb5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ft4aq1-ib"/><path class="c3zm8bejl"/><path class="xwy67zb5i"/></g>`,
		"fallback": "hugeicons:whiteboard",
	});
}

export default Component;
