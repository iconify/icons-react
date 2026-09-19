import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmde6-b4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmde6-b4d"/>`,
		"fallback": "boxicons:workflow-alt-filled",
	});
}

export default Component;
