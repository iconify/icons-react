import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/i_mx_8bea.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVG1oWAAb2K"><path class="k5-vjlrin"/><path clip-rule="evenodd" class="i_mx_8bea"/></mask></defs><circle mask="url(#SVG1oWAAb2K)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:wrench-circle-filled",
	});
}

export default Component;
