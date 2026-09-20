import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qlf4dcbrt.css';
import '../../css/e/ep8xveb6s.css';
import '../../css/q/q6lfeabcz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qlf4dcbrt"/><path class="ep8xveb6s"/><path class="q6lfeabcz"/></g>`,
		"fallback": "streamline-color:wifi",
	});
}

export default Component;
