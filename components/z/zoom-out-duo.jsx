import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h3k57tbsl.css';
import '../../css/v/v9fxjuqxr.css';
import '../../css/o/olgj5xbvl.css';
import '../../css/v/v9uc2q8gc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="h3k57tbsl"/><path class="v9fxjuqxr wm-a"/><path class="olgj5xbvl"/><path class="v9uc2q8gc wm-a"/></g>`,
		"fallback": "withicons:zoom-out-duo",
	});
}

export default Component;
