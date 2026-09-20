import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/h/hwsal5q-o.css';
import '../../css/j/jq12r3_6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="hwsal5q-o"/><path class="jq12r3_6g"/></g>`,
		"fallback": "lets-icons:world-alt",
	});
}

export default Component;
