import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fxbgvkb6n.css';
import '../../css/k/k0nzsl_6c.css';
import '../../css/w/w30g80b8v.css';
import '../../css/a/a18g77b4g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fxbgvkb6n"/><path class="k0nzsl_6c"/><path class="w30g80b8v"/><path class="a18g77b4g"/></g>`,
		"fallback": "streamline-flex-color:zoom-out-gesture",
	});
}

export default Component;
