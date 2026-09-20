import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l26w1ybvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l26w1ybvg"/>`,
		"fallback": "thesvg:xcode",
	});
}

export default Component;
