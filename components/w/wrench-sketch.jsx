import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vdvfy6qjl.css';
import '../../css/l/l-1418vhh.css';
import '../../css/a/a1pvkxohd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vdvfy6qjl"/><path class="l-1418vhh"/><path class="a1pvkxohd"/></g>`,
		"fallback": "withicons:wrench-sketch",
	});
}

export default Component;
