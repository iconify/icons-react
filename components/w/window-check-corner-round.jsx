import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhe-mqb-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhe-mqb-y"/>`,
		"fallback": "coolicons:window-check-corner-round",
	});
}

export default Component;
