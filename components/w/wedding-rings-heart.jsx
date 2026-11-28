import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2s2_rb2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2s2_rb2j"/>`,
		"fallback": "noviair:wedding-rings-heart",
	});
}

export default Component;
