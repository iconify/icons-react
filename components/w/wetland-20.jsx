import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo8y3gbsq.css';
import '../../css/e/evqm7b8sn.css';
import '../../css/j/jop4h09dw.css';
import '../../css/q/qy1qx3bpf.css';
import '../../css/m/m_4azxl5z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo8y3gbsq"/><path class="evqm7b8sn"/><path class="jop4h09dw"/><path class="qy1qx3bpf"/><path class="m_4azxl5z"/>`,
		"fallback": "energy-icons:wetland-20",
	});
}

export default Component;
