import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/x7kwipb1c.css';
import '../../css/t/ts1dqou4v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="x7kwipb1c"/><path class="ts1dqou4v"/></g>`,
		"fallback": "icon-park-outline:xiaodu-home",
	});
}

export default Component;
