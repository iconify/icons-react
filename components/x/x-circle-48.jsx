import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/z/zzeuts5xc.css';
import '../../css/e/ezgs73y2p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="zzeuts5xc"/><path class="ezgs73y2p"/>`,
		"fallback": "energy-icons:x-circle-48",
	});
}

export default Component;
