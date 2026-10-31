import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7v2a1bxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7v2a1bxw"/>`,
		"fallback": "coolicons:youtube-round",
	});
}

export default Component;
