import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8wtxcbhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s8wtxcbhp"/>`,
		"fallback": "streamline-sharp:wine-remix",
	});
}

export default Component;
