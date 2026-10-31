import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hs5pvc9mx.css';
import '../../css/u/ukvl-hhfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hs5pvc9mx"/><path class="ukvl-hhfo"/></g>`,
		"fallback": "coolicons:weight-duotone-round",
	});
}

export default Component;
