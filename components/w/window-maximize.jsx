import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5v3zqbul.css';
import '../../css/q/qv0ny4dca.css';
import '../../css/p/pjqkbnbqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5v3zqbul"/><path class="qv0ny4dca"/><path class="pjqkbnbqd"/>`,
		"fallback": "uim:window-maximize",
	});
}

export default Component;
