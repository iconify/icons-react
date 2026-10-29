import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a7ntdsb8h.css';
import '../../css/i/iut4_7r3a.css';
import '../../css/a/ah3mzbcfx.css';
import '../../css/e/ey_w3tbdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="a7ntdsb8h wm-k"/><path class="iut4_7r3a wm-s"/><path class="ah3mzbcfx"/><path class="ey_w3tbdh"/></g>`,
		"fallback": "withicons-bauhaus:witch-hat",
	});
}

export default Component;
