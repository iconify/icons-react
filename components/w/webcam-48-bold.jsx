import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqr8yp28h.css';
import '../../css/f/f4mdfjbca.css';
import '../../css/x/xm577jbwp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqr8yp28h"/><path class="f4mdfjbca"/><path class="xm577jbwp"/>`,
		"fallback": "energy-icons:webcam-48-bold",
	});
}

export default Component;
