import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nn2vh5b-t.css';
import '../../css/l/l59o3ubcg.css';
import '../../css/q/qd_vzbm9l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nn2vh5b-t"/><path class="l59o3ubcg"/><path class="qd_vzbm9l"/></g>`,
		"fallback": "bi:zoom-out",
	});
}

export default Component;
