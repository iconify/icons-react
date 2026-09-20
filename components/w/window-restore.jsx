import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgp7bubto.css';
import '../../css/k/kbad1107b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgp7bubto"/><path class="kbad1107b"/>`,
		"fallback": "pixel:window-restore",
	});
}

export default Component;
