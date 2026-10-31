import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sefmfp0ls.css';
import '../../css/c/cz_iyzbnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sefmfp0ls"/><path class="cz_iyzbnm"/></g>`,
		"fallback": "coolicons:zodiac-sagittarius-bulk-round",
	});
}

export default Component;
