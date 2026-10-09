import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpj3_ybqz.css';
import '../../css/w/wec04pbcz.css';
import '../../css/o/ota_86bus.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpj3_ybqz"/><path class="wec04pbcz"/><path class="ota_86bus"/>`,
		"fallback": "energy-icons:wind-direction-20-bold",
	});
}

export default Component;
