import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bt_sx46sa.css';
import '../../css/c/cm5dfrb7n.css';
import '../../css/y/yu-xxq-6b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bt_sx46sa"/><path class="cm5dfrb7n"/><path class="yu-xxq-6b"/></g>`,
		"fallback": "streamline-color:wifi-disabled",
	});
}

export default Component;
