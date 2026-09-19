import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p8nulxl3s.css';
import '../../css/p/pap5xhb-b.css';
import '../../css/v/vgionz7jo.css';
import '../../css/f/f51xn97ff.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p8nulxl3s"/><path class="pap5xhb-b"/><path class="vgionz7jo"/><path class="f51xn97ff"/></g>`,
		"fallback": "fluent-emoji-flat:wood",
	});
}

export default Component;
