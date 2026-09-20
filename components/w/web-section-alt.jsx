import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6nuan2hq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6nuan2hq"/>`,
		"fallback": "uit:web-section-alt",
	});
}

export default Component;
