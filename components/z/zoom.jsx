import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/yeud6mj5o.css';
import '../../css/m/mf1jdvbha.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="yeud6mj5o"/><path class="mf1jdvbha"/></g>`,
		"fallback": "icon-park-solid:zoom",
	});
}

export default Component;
