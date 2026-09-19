import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_hqlra2w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_hqlra2w"/>`,
		"fallback": "fluent-emoji-high-contrast:writing-hand",
	});
}

export default Component;
