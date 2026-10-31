import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzv02bb8d.css';
import '../../css/p/p9tws-bif.css';
import '../../css/z/zixwt9v7p.css';
import '../../css/t/tqdp_8bij.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yzv02bb8d"/><path class="p9tws-bif"/><path class="zixwt9v7p"/><path class="tqdp_8bij"/></g>`,
		"fallback": "streamline-kameleon-color:wrench-2-pop",
	});
}

export default Component;
