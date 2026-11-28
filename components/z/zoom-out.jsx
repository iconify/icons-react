import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba_329odg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba_329odg"/>`,
		"fallback": "noviair:zoom-out",
	});
}

export default Component;
