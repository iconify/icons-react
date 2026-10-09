import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wry8nmbpn.css';
import '../../css/c/crnolnb_i.css';
import '../../css/l/lak7f2bfz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wry8nmbpn"/><path class="crnolnb_i"/><path class="lak7f2bfz"/>`,
		"fallback": "energy-icons:wine-glass-48",
	});
}

export default Component;
