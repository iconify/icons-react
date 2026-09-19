import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvop7d4le.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvop7d4le"/>`,
		"fallback": "game-icons:zigzag-tune",
	});
}

export default Component;
