import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/v8t7a0big.css';
import '../../css/q/qxv7eobba.css';
import '../../css/t/tmt8sqbls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="v8t7a0big"/><path class="qxv7eobba"/><path class="tmt8sqbls"/></g>`,
		"fallback": "hugeicons:wrench-01",
	});
}

export default Component;
