import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6p_ufb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6p_ufb9x"/>`,
		"fallback": "cbi:xtool",
	});
}

export default Component;
