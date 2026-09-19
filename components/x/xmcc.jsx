import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s3stqnxsj.css';
import '../../css/u/u-vqk0j-t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="s3stqnxsj"/><path class="u-vqk0j-t"/></g>`,
		"fallback": "cryptocurrency-color:xmcc",
	});
}

export default Component;
