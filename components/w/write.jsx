import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/e/exbim_fkl.css';
import '../../css/d/d0h37k-hr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="exbim_fkl"/><path class="d0h37k-hr"/></g>`,
		"fallback": "icon-park-solid:write",
	});
}

export default Component;
