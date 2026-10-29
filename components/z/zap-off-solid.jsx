import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z4-q3o-8g.css';
import '../../css/f/fr8h0cc5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wm-k z4-q3o-8g"/><path class="fr8h0cc5s wm-s"/></g>`,
		"fallback": "withicons:zap-off-solid",
	});
}

export default Component;
