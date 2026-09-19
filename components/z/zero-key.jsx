import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3g_w1qsa.css';
import '../../css/k/klsk1sb8v.css';
import '../../css/h/hvfwvmb8r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t3g_w1qsa"><rect class="klsk1sb8v"/><rect class="hvfwvmb8r"/></g>`,
		"fallback": "icon-park:zero-key",
	});
}

export default Component;
