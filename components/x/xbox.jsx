import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2umeba-b.css';
import '../../css/y/y295kubtu.css';
import '../../css/b/blobf-_qz.css';
import '../../css/k/k2sku7b0z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h2umeba-b"/><path class="y295kubtu"/><path class="blobf-_qz"/><path class="k2sku7b0z"/></g>`,
		"fallback": "streamline-color:xbox",
	});
}

export default Component;
