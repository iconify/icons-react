import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/uns4e8bmd.css';
import '../../css/m/m5b6xqb-l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="uns4e8bmd"/><path class="m5b6xqb-l"/></g>`,
		"fallback": "icon-park-solid:weixin-top-stories",
	});
}

export default Component;
