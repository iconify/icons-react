import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/oc-a5jbga.css';
import '../../css/y/yy6sjibep.css';
import '../../css/x/xjqifybeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="oc-a5jbga"/><path class="yy6sjibep"/><path class="xjqifybeo"/></g>`,
		"fallback": "withicons:zap-sketch",
	});
}

export default Component;
