import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5hel5j6j.css';
import '../../css/f/f5kqw9b6l.css';
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
		"content": `<path class="h5hel5j6j"/><path class="f5kqw9b6l"/><circle class="o0lqhvmmi"/><path class="k8brvnbck"/>`,
		"fallback": "ion:woman-outline",
	});
}

export default Component;
