import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_x4crb0x.css';
import '../../css/z/z477udqcs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s_x4crb0x"/><path class="z477udqcs"/></g>`,
		"fallback": "fluent-emoji-flat:white-small-square",
	});
}

export default Component;
