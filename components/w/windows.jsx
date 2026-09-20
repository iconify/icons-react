import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txtnrsm5l.css';
import '../../css/v/vgxjb1-7u.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="txtnrsm5l"/><path class="vgxjb1-7u"/>`,
		"fallback": "openmoji:windows",
	});
}

export default Component;
