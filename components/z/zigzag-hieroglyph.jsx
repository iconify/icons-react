import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc18l2_6b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc18l2_6b"/>`,
		"fallback": "game-icons:zigzag-hieroglyph",
	});
}

export default Component;
