import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np-7czb9e.css';
import '../../css/n/nk4fjxbrm.css';
import '../../css/c/cz0muqbyq.css';
import '../../css/l/lxgl7abwy.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np-7czb9e"/><path class="nk4fjxbrm"/><path class="cz0muqbyq"/><path class="lxgl7abwy"/>`,
		"fallback": "devicon-plain:woocommerce-wordmark",
	});
}

export default Component;
