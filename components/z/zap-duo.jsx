import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z5lmghbam.css';
import '../../css/b/b536_tb1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z5lmghbam"/><path class="b536_tb1e"/></g>`,
		"fallback": "withicons:zap-duo",
	});
}

export default Component;
