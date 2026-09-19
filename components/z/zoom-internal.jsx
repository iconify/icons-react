import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/y/ypq84ib1f.css';
import '../../css/w/wekuv1b2d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ypq84ib1f"/><path class="wekuv1b2d"/></g>`,
		"fallback": "icon-park-outline:zoom-internal",
	});
}

export default Component;
