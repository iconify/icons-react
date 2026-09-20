import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydne_bc6v.css';
import '../../css/r/r0_y5-b5i.css';
import '../../css/h/hgxqnbbag.css';
import '../../css/n/ny75v-k7f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ydne_bc6v"><path class="r0_y5-b5i"/><path class="hgxqnbbag"/><path class="ny75v-k7f"/></g>`,
		"fallback": "streamline-plump:web",
	});
}

export default Component;
