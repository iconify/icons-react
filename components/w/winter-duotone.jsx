import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxbaodhg.css';
import '../../css/b/bkisl-b5r.css';
import '../../css/t/tue6w6-lk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vbxbaodhg"><circle class="bkisl-b5r"/><path class="tue6w6-lk"/></g>`,
		"fallback": "lets-icons:winter-duotone",
	});
}

export default Component;
