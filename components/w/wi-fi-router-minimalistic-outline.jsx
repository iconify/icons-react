import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3kz85edk.css';
import '../../css/c/ckyo9rb7l.css';
import '../../css/d/dyy0skbpx.css';
import '../../css/u/uh_9yfsol.css';
import '../../css/p/pdxud9b4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3kz85edk"/><path class="ckyo9rb7l"/><path class="dyy0skbpx"/><path class="uh_9yfsol"/><path clip-rule="evenodd" class="pdxud9b4m"/>`,
		"fallback": "solar:wi-fi-router-minimalistic-outline",
	});
}

export default Component;
