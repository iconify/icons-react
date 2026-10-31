import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/p7j418b9p.css';
import '../../css/p/plpl1_b2t.css';
import '../../css/d/d-ca87bew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="p7j418b9p wm-shadow"/><path class="plpl1_b2t"/><path class="d-ca87bew"/></g>`,
		"fallback": "withicons-retro:wifi-low",
	});
}

export default Component;
