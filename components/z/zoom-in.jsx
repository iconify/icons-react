import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nn2vh5b-t.css';
import '../../css/l/l59o3ubcg.css';
import '../../css/s/s6d8kmbpc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nn2vh5b-t"/><path class="l59o3ubcg"/><path class="s6d8kmbpc"/></g>`,
		"fallback": "bi:zoom-in",
	});
}

export default Component;
