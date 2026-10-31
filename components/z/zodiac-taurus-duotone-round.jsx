import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjmkdlb5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjmkdlb5o"/>`,
		"fallback": "coolicons:zodiac-taurus-duotone-round",
	});
}

export default Component;
