import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l23kbkbjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l23kbkbjd"/>`,
		"fallback": "tabler:wheelchair-off",
	});
}

export default Component;
