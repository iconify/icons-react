import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/txtoyu8_w.css';
import '../../css/w/wu_wrhqyw.css';
import '../../css/b/bzq71qb1g.css';
import '../../css/x/x1_4rctfi.css';
import '../../css/j/j7unim6yq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="txtoyu8_w"/><path class="wu_wrhqyw"/><path class="bzq71qb1g"/><path class="x1_4rctfi"/><path clip-rule="evenodd" class="j7unim6yq"/></g>`,
		"fallback": "solar:wi-fi-router-round-bold",
	});
}

export default Component;
