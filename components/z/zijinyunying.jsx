import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bns6hkbpl.css';
import '../../css/e/erfgj169s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="bns6hkbpl"/><path class="erfgj169s"/></g>`,
		"fallback": "icon-park-outline:zijinyunying",
	});
}

export default Component;
