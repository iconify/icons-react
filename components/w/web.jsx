import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j5580yvmx.css';
import '../../css/b/buf99sqhn.css';
import '../../css/q/q2us9-bhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j5580yvmx"/><path class="buf99sqhn"/><path class="q2us9-bhf"/></g>`,
		"fallback": "tdesign:web",
	});
}

export default Component;
