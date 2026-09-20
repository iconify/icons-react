import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xy5tg3qjq.css';
import '../../css/f/f1wgwye4w.css';
import '../../css/t/t4lvtfbbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xy5tg3qjq"/><path class="f1wgwye4w"/><path clip-rule="evenodd" class="t4lvtfbbl"/></g>`,
		"fallback": "reicon:widget-add",
	});
}

export default Component;
