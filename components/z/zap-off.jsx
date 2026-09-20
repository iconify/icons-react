import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kgjo_eblc.css';
import '../../css/j/jxu9mpkpl.css';
import '../../css/k/kncuc7bda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kgjo_eblc"/><path class="jxu9mpkpl"/><path class="kncuc7bda"/></g>`,
		"fallback": "pixelarticons:zap-off",
	});
}

export default Component;
