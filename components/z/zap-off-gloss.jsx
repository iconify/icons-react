import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4w5a7bwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4w5a7bwe"/>`,
		"fallback": "withicons:zap-off-gloss",
	});
}

export default Component;
