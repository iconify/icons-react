import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/j64jqwfra.css';
import '../../css/z/zgv3likpx.css';
import '../../css/b/bxtnlct1k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="j64jqwfra"/><path class="zgv3likpx"/><path class="bxtnlct1k"/></g>`,
		"fallback": "icon-park-outline:woman",
	});
}

export default Component;
