import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/v/v7ty67bvl.css';
import '../../css/k/ko_-62ycd.css';
import '../../css/n/nxgn35i8k.css';
import '../../css/w/wcswsybcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="v7ty67bvl"/><path class="ko_-62ycd"/><path class="nxgn35i8k"/></g><path class="wcswsybcz"/></g>`,
		"fallback": "solar:wi-fi-bold-duotone",
	});
}

export default Component;
