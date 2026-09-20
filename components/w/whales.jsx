import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezrac2bcq.css';
import '../../css/c/cuj_81b3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezrac2bcq"/><path class="cuj_81b3k"/>`,
		"fallback": "token:whales",
	});
}

export default Component;
