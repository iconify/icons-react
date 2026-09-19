import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/w7b7i40wv.css';
import '../../css/o/o452wi0jp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="w7b7i40wv"/><path class="o452wi0jp"/></g>`,
		"fallback": "icon-park-solid:wrong-user",
	});
}

export default Component;
