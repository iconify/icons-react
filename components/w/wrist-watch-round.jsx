import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahpckbcel.css';
import '../../css/e/e-5v66b_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahpckbcel"/><path class="e-5v66b_l"/>`,
		"fallback": "boxicons:wrist-watch-round",
	});
}

export default Component;
