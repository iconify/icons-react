import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/q/qlm1r95dg.css';
import '../../css/a/akd1ysboe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="vkcj4bcdm"/><path class="qlm1r95dg"/><circle class="akd1ysboe"/></g>`,
		"fallback": "icon-park-outline:winking-face-with-open-eyes",
	});
}

export default Component;
