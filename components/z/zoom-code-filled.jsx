import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv-60l-dd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv-60l-dd"/>`,
		"fallback": "tabler:zoom-code-filled",
	});
}

export default Component;
