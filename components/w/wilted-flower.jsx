import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s7zs4u8eo.css';
import '../../css/b/bbc2fccsv.css';
import '../../css/t/t3du_ox9r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s7zs4u8eo"/><path class="bbc2fccsv"/><path class="t3du_ox9r"/></g>`,
		"fallback": "fluent-emoji-flat:wilted-flower",
	});
}

export default Component;
