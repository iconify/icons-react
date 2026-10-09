import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx2xmtbjn.css';
import '../../css/b/bay9ped7x.css';
import '../../css/x/xohk6ubyz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx2xmtbjn"/><path class="bay9ped7x"/><path class="xohk6ubyz"/>`,
		"fallback": "energy-icons:x-square-48",
	});
}

export default Component;
