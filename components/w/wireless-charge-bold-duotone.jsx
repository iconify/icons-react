import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oso782buv.css';
import '../../css/i/ik4h_zthb.css';
import '../../css/l/lwh3p0k8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oso782buv"/><path class="ik4h_zthb"/><path class="lwh3p0k8o"/>`,
		"fallback": "solar:wireless-charge-bold-duotone",
	});
}

export default Component;
