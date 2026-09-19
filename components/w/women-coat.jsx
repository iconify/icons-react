import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lduyeyb9g.css';
import '../../css/b/bwi1l7bpq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="lduyeyb9g"/><path class="bwi1l7bpq"/></g>`,
		"fallback": "icon-park-outline:women-coat",
	});
}

export default Component;
