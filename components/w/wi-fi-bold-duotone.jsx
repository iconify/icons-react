import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/v/v7ty67bvl.css';
import '../../css/k/ko_-62ycd.css';
import '../../css/n/nxgn35i8k.css';
import '../../css/t/tfsq0xb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="v7ty67bvl"/><path class="ko_-62ycd"/><path class="nxgn35i8k"/></g><path class="tfsq0xb1f"/>`,
		"fallback": "solar:wi-fi-bold-duotone",
	});
}

export default Component;
