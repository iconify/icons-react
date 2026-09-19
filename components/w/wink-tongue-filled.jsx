import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcj_ausiv.css';
import '../../css/h/hmp_1pb5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcj_ausiv"/><path class="hmp_1pb5l"/>`,
		"fallback": "boxicons:wink-tongue-filled",
	});
}

export default Component;
