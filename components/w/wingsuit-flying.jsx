import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btx30rb9t.css';
import '../../css/i/i_r28w9ux.css';
import '../../css/y/ydkw8wkxd.css';
import '../../css/c/crqsvlbwz.css';
import '../../css/v/v2j7te83t.css';
import '../../css/c/cylzn3m1b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="btx30rb9t"><path class="i_r28w9ux"/><path class="ydkw8wkxd"/><path class="crqsvlbwz"/><path class="v2j7te83t"/><path class="cylzn3m1b"/></g>`,
		"fallback": "icon-park:wingsuit-flying",
	});
}

export default Component;
