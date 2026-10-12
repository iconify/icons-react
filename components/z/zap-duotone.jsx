import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/flki39bip.css';
import '../../css/q/qie3s9bpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="flki39bip"/><path class="qie3s9bpq"/></g>`,
		"fallback": "lucide-extended:zap-duotone",
	});
}

export default Component;
