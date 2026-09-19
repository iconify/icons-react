import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c91ecjb_r.css';
import '../../css/a/a6rik3s7b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="c91ecjb_r"/><path class="a6rik3s7b"/></g>`,
		"fallback": "icon-park-outline:weixin-games",
	});
}

export default Component;
