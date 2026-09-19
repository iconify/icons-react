import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/uns4e8bmd.css';
import '../../css/q/q2qq8rb1s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="uns4e8bmd"/><path class="q2qq8rb1s"/></g>`,
		"fallback": "icon-park-outline:weixin-top-stories",
	});
}

export default Component;
