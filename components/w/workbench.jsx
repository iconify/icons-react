import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/l/ldhbzsb2t.css';
import '../../css/g/guqdrdbsc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ldhbzsb2t"/><path class="guqdrdbsc"/></g>`,
		"fallback": "icon-park-outline:workbench",
	});
}

export default Component;
