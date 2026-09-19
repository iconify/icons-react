import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft8aas7is.css';
import '../../css/h/h_gg3_bew.css';
import '../../css/o/o0lqhvmmi.css';
import '../../css/k/k8brvnbck.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft8aas7is"/><path class="h_gg3_bew"/><circle class="o0lqhvmmi"/><path class="k8brvnbck"/>`,
		"fallback": "ion:woman-outline",
	});
}

export default Component;
