import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgep_90_q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vgep_90_q"/>`,
		"fallback": "streamline:zodiac-12-remix",
	});
}

export default Component;
