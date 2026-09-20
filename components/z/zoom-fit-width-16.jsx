import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi5qk-80e.css';
import '../../css/k/k2y623byz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vi5qk-80e"/><path class="k2y623byz"/>`,
		"fallback": "qlementine-icons:zoom-fit-width-16",
	});
}

export default Component;
