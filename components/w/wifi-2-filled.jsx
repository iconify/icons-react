import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4cgbq-0u.css';
import '../../css/v/vvblkl2ti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4cgbq-0u"/><path class="vvblkl2ti"/>`,
		"fallback": "boxicons:wifi-2-filled",
	});
}

export default Component;
